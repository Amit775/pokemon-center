import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CharacteristicsCreateNestedManyWithoutStatInput } from "../inputs/CharacteristicsCreateNestedManyWithoutStatInput";
import { NaturesCreateNestedManyWithoutDecreasedStatInput } from "../inputs/NaturesCreateNestedManyWithoutDecreasedStatInput";
import { NaturesCreateNestedManyWithoutIncreasedStatInput } from "../inputs/NaturesCreateNestedManyWithoutIncreasedStatInput";
import { PokemonStatsCreateNestedManyWithoutStatInput } from "../inputs/PokemonStatsCreateNestedManyWithoutStatInput";

@TypeGraphQL.InputType("StatsCreateWithoutMoveMetaStatChangesInput", {})
export class StatsCreateWithoutMoveMetaStatChangesInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  damage_class_id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  is_battle_only!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  game_index?: number | undefined;

  @TypeGraphQL.Field(_type => PokemonStatsCreateNestedManyWithoutStatInput, {
    nullable: true
  })
  pokemonStats?: PokemonStatsCreateNestedManyWithoutStatInput | undefined;

  @TypeGraphQL.Field(_type => CharacteristicsCreateNestedManyWithoutStatInput, {
    nullable: true
  })
  characteristics?: CharacteristicsCreateNestedManyWithoutStatInput | undefined;

  @TypeGraphQL.Field(_type => NaturesCreateNestedManyWithoutDecreasedStatInput, {
    nullable: true
  })
  natures?: NaturesCreateNestedManyWithoutDecreasedStatInput | undefined;

  @TypeGraphQL.Field(_type => NaturesCreateNestedManyWithoutIncreasedStatInput, {
    nullable: true
  })
  naturesIncreased?: NaturesCreateNestedManyWithoutIncreasedStatInput | undefined;
}
