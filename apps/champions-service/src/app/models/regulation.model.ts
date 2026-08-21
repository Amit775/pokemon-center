import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';

/**
 * A Champions regulation set — the unit that defines what is legal.
 *
 * Champions has no fixed dex: the usable roster rotates on a schedule (M-B ran
 * 17 Jun 2026 → 2 Sep 2026 with ~208 species and ~75 Megas). Legality is therefore always
 * expressed relative to a regulation, never as a flag on a Pokémon.
 */
@ObjectType()
export class Regulation {
	@Field(() => Int)
	id!: number;

	/** Short code as the game publishes it, e.g. `M-B`. */
	@Field()
	code!: string;

	@Field()
	name!: string;

	@Field(() => GraphQLISODateTime)
	startsOn!: Date;

	@Field(() => GraphQLISODateTime)
	endsOn!: Date;

	@Field()
	isCurrent!: boolean;

	/** Restrictions and format parameters that are not per-Pokémon. */
	@Field(() => String, { nullable: true })
	notes!: string | null;

	/** How many Pokémon (base forms + Megas) are legal in this regulation. */
	@Field(() => Int)
	legalCount!: number;
}
