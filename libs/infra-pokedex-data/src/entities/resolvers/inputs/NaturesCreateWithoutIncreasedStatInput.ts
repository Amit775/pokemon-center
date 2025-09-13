import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferencesCreateNestedManyWithoutNatureInput } from "../inputs/NatureBattleStylePreferencesCreateNestedManyWithoutNatureInput";
import { StatsCreateNestedOneWithoutNaturesInput } from "../inputs/StatsCreateNestedOneWithoutNaturesInput";
import { TypesCreateNestedManyWithoutNaturesIncreasedInput } from "../inputs/TypesCreateNestedManyWithoutNaturesIncreasedInput";
import { TypesCreateNestedManyWithoutNaturesInput } from "../inputs/TypesCreateNestedManyWithoutNaturesInput";

@TypeGraphQL.InputType("NaturesCreateWithoutIncreasedStatInput", {})
export class NaturesCreateWithoutIncreasedStatInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  hates_flavor_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  likes_flavor_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  game_index!: number;

  @TypeGraphQL.Field(_type => StatsCreateNestedOneWithoutNaturesInput, {
    nullable: false
  })
  decreasedStat!: StatsCreateNestedOneWithoutNaturesInput;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesCreateNestedManyWithoutNatureInput, {
    nullable: true
  })
  battleStylePreferences?: NatureBattleStylePreferencesCreateNestedManyWithoutNatureInput | undefined;

  @TypeGraphQL.Field(_type => TypesCreateNestedManyWithoutNaturesInput, {
    nullable: true
  })
  decreasedStatTypes?: TypesCreateNestedManyWithoutNaturesInput | undefined;

  @TypeGraphQL.Field(_type => TypesCreateNestedManyWithoutNaturesIncreasedInput, {
    nullable: true
  })
  increasedStatTypes?: TypesCreateNestedManyWithoutNaturesIncreasedInput | undefined;
}
