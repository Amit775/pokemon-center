import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonEvolution as PrismaPokemonEvolution } from '@prisma/client';

@ObjectType()
export class PokemonEvolution implements PrismaPokemonEvolution {
  @Field(() => Int)
  id: Int;

  @Field(() => Int)
  evolved_species_id: Int;

  @Field(() => Int)
  evolution_trigger_id: Int;

  @Field(() => Int, { nullable: true })
  trigger_item_id: Int;

  @Field(() => Int, { nullable: true })
  minimum_level: Int;

  @Field(() => Int, { nullable: true })
  gender_id: Int;

  @Field(() => Int, { nullable: true })
  location_id: Int;

  @Field(() => Int, { nullable: true })
  held_item_id: Int;

  @Field(, { nullable: true })
  time_of_day: String;

  @Field(() => Int, { nullable: true })
  known_move_id: Int;

  @Field(() => Int, { nullable: true })
  known_move_type_id: Int;

  @Field(() => Int, { nullable: true })
  minimum_happiness: Int;

  @Field(() => Int, { nullable: true })
  minimum_beauty: Int;

  @Field(() => Int, { nullable: true })
  minimum_affection: Int;

  @Field(() => Int, { nullable: true })
  relative_physical_stats: Int;

  @Field(() => Int, { nullable: true })
  party_species_id: Int;

  @Field(() => Int, { nullable: true })
  party_type_id: Int;

  @Field(() => Int, { nullable: true })
  trade_species_id: Int;

  @Field(() => Int)
  needs_overworld_rain: Int;

  @Field(() => Int)
  turn_upside_down: Int;

}
