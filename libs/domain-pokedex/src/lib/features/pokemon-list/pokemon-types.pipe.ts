import { Pipe, PipeTransform } from '@angular/core';

interface TypeSlot {
	slot: number;
	type: { identifier: string };
}

/** Maps the API's typed `{ slot, type }[]` to an ordered list of type slugs. */
@Pipe({ name: 'pokemonTypes', standalone: true })
export class PokemonTypesPipe implements PipeTransform {
	transform(types: readonly TypeSlot[] | null | undefined): string[] {
		return [...(types ?? [])].sort((first, second) => first.slot - second.slot).map((pokemonType) => pokemonType.type.identifier);
	}
}
