import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonEvolution as PrismaPokemonEvolution } from '@prisma/client';

@ObjectType()
export class PokemonEvolution implements PrismaPokemonEvolution {
  @Field(() => Int)
  id!: number;

  @Field(() => Int)
  evolved_species_id!: number;

  @Field(() => Int)
  evolution_trigger_id!: number;

  @Field(() => Int, { nullable: true })
  trigger_item_id!: number | null;

  @Field(() => Int, { nullable: true })
  minimum_level!: number | null;

  @Field(() => Int, { nullable: true })
  gender_id!: number | null;

  @Field(() => Int, { nullable: true })
  location_id!: number | null;

  @Field(() => Int, { nullable: true })
  held_item_id!: number | null;

  @Field(() => String, { nullable: true })
  time_of_day!: string | null;

  @Field(() => Int, { nullable: true })
  known_move_id!: number | null;

  @Field(() => Int, { nullable: true })
  known_move_type_id!: number | null;

  @Field(() => Int, { nullable: true })
  minimum_happiness!: number | null;

  @Field(() => Int, { nullable: true })
  minimum_beauty!: number | null;

  @Field(() => Int, { nullable: true })
  minimum_affection!: number | null;

  @Field(() => Int, { nullable: true })
  relative_physical_stats!: number | null;

  @Field(() => Int, { nullable: true })
  party_species_id!: number | null;

  @Field(() => Int, { nullable: true })
  party_type_id!: number | null;

  @Field(() => Int, { nullable: true })
  trade_species_id!: number | null;

  @Field(() => Int)
  needs_overworld_rain!: number;

  @Field(() => Int)
  turn_upside_down!: number;
}
