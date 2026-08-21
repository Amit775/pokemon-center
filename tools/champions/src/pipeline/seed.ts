// Relative for the same reason as derive.ts: ts-node does not apply tsconfig `paths`.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { PrismaClient } from '../../../../libs/prisma-champions/src/generated/client';
import { PrismaPg } from '@prisma/adapter-pg';
import * as fs from 'fs';
import * as path from 'path';
import { DERIVED_DIR, DerivedDataset } from '../lib/champions-data';

/**
 * Stage 3 of the Champions pipeline: load the reviewed JSON into the Champions database.
 *
 * Idempotent by construction — every row carries its mainline id as a primary key, so the
 * whole thing is an upsert and re-running is safe. That matters because this will be run
 * again on every regulation rotation, and a pipeline you are afraid to re-run is a pipeline
 * that rots.
 *
 * Reference rows are never deleted: a Pokémon that leaves the roster stops being *legal*,
 * but its stats stay so that old battle logs still resolve.
 */

function loadDataset(file?: string): { dataset: DerivedDataset; path: string } {
	const dir = path.join(process.cwd(), DERIVED_DIR);
	const candidates = file ? [path.join(process.cwd(), file)] : fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith('.json')).map((f) => path.join(dir, f)) : [];

	if (candidates.length === 0) {
		throw new Error(`No derived dataset found in ${DERIVED_DIR}. Run "nx run champions:derive" first.`);
	}

	// Newest first, so a fresh regulation wins without needing an argument.
	const chosen = candidates.sort((a, b) => fs.statSync(b).mtimeMs - fs.statSync(a).mtimeMs)[0];
	return { dataset: JSON.parse(fs.readFileSync(chosen, 'utf8')) as DerivedDataset, path: chosen };
}

export async function runSeed(file?: string): Promise<void> {
	const { dataset, path: source } = loadDataset(file);
	console.log(`Seeding from ${path.relative(process.cwd(), source)}`);
	console.log(`  regulation ${dataset.regulation.code}, ${dataset.pokemon.length} Pokémon, ${dataset.moves.length} moves`);

	const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString: process.env['DATABASE_URL_CHAMPIONS'] }) });

	try {
		// ---- reference data, parents before children ------------------------------------
		await prisma.$transaction(
			dataset.types.map((t) =>
				prisma.champType.upsert({ where: { id: t.id }, create: { id: t.id, slug: t.slug, name: t.name }, update: { slug: t.slug, name: t.name } }),
			),
		);
		console.log(`  types: ${dataset.types.length}`);

		await prisma.champTypeEfficacy.deleteMany({});
		await prisma.champTypeEfficacy.createMany({
			data: dataset.typeEfficacy.map((e) => ({
				attacking_type_id: e.attackingTypeId,
				defending_type_id: e.defendingTypeId,
				damage_factor: e.damageFactor,
			})),
		});
		console.log(`  type efficacy: ${dataset.typeEfficacy.length}`);

		for (const a of dataset.abilities) {
			await prisma.champAbility.upsert({
				where: { id: a.id },
				create: { id: a.id, slug: a.slug, name: a.name, effect_text: a.effectText, is_mega: a.isMega },
				update: { slug: a.slug, name: a.name, effect_text: a.effectText, is_mega: a.isMega },
			});
		}
		console.log(`  abilities: ${dataset.abilities.length}`);

		for (const m of dataset.moves) {
			const fields = {
				slug: m.slug,
				name: m.name,
				type_id: m.typeId,
				damage_class: m.damageClass,
				power: m.power,
				pp: m.pp,
				accuracy: m.accuracy,
				priority: m.priority,
				effect_text: m.effectText,
				effect_chance: m.effectChance,
				flags: m.flags,
				is_overridden: m.isOverridden,
				override_note: m.overrideNote,
			};
			await prisma.champMove.upsert({ where: { id: m.id }, create: { id: m.id, ...fields }, update: fields });
		}
		console.log(`  moves: ${dataset.moves.length} (${dataset.moves.filter((m) => m.isOverridden).length} overridden)`);

		// Base forms before Megas, so `mega_of_id` always has a row to point at.
		const ordered = [...dataset.pokemon].sort((a, b) => Number(a.isMega) - Number(b.isMega));
		for (const p of ordered) {
			const fields = {
				slug: p.slug,
				name: p.name,
				national_dex_no: p.nationalDexNo,
				type1_id: p.type1Id,
				type2_id: p.type2Id,
				base_hp: p.baseHp,
				base_attack: p.baseAttack,
				base_defense: p.baseDefense,
				base_special_attack: p.baseSpecialAttack,
				base_special_defense: p.baseSpecialDefense,
				base_speed: p.baseSpeed,
				is_mega: p.isMega,
				mega_of_id: p.megaOfId,
				mega_ability_id: p.megaAbilityId,
				sprite_key: p.spriteKey,
				learnset_is_approximate: p.learnsetIsApproximate,
			};
			await prisma.champPokemon.upsert({ where: { id: p.id }, create: { id: p.id, ...fields }, update: fields });
		}
		console.log(`  pokemon: ${dataset.pokemon.length}`);

		// Join tables are rebuilt wholesale — cheap at this scale, and it means a Pokémon
		// that lost a move does not keep it forever.
		const pokemonIds = dataset.pokemon.map((p) => p.id);
		await prisma.champPokemonAbility.deleteMany({ where: { pokemon_id: { in: pokemonIds } } });
		await prisma.champPokemonAbility.createMany({
			data: dataset.pokemon.flatMap((p) =>
				p.abilities.map((a) => ({ pokemon_id: p.id, ability_id: a.abilityId, slot: a.slot, is_hidden: a.isHidden })),
			),
			skipDuplicates: true,
		});

		await prisma.champLearnset.deleteMany({ where: { pokemon_id: { in: pokemonIds } } });
		const learnset = dataset.pokemon.flatMap((p) => p.moveIds.map((moveId) => ({ pokemon_id: p.id, move_id: moveId })));
		// Chunked: a single createMany with tens of thousands of rows exceeds the parameter limit.
		for (let i = 0; i < learnset.length; i += 5000) {
			await prisma.champLearnset.createMany({ data: learnset.slice(i, i + 5000), skipDuplicates: true });
		}
		console.log(`  learnset pairs: ${learnset.length}`);

		// ---- regulation -----------------------------------------------------------------
		const reg = dataset.regulation;
		if (reg.isCurrent) await prisma.regulation.updateMany({ where: { is_current: true }, data: { is_current: false } });

		const regulation = await prisma.regulation.upsert({
			where: { code: reg.code },
			create: {
				code: reg.code,
				name: reg.name,
				starts_on: new Date(reg.startsOn),
				ends_on: new Date(reg.endsOn),
				is_current: reg.isCurrent,
				notes: reg.notes,
			},
			update: { name: reg.name, starts_on: new Date(reg.startsOn), ends_on: new Date(reg.endsOn), is_current: reg.isCurrent, notes: reg.notes },
		});

		await prisma.regulationLegality.deleteMany({ where: { regulation_id: regulation.id } });
		await prisma.regulationLegality.createMany({
			data: reg.legalPokemonIds.map((id) => ({ regulation_id: regulation.id, pokemon_id: id })),
			skipDuplicates: true,
		});
		console.log(`  regulation ${reg.code}: ${reg.legalPokemonIds.length} legal Pokémon`);

		console.log('\nSeed complete.');
	} finally {
		await prisma.$disconnect();
	}
}
