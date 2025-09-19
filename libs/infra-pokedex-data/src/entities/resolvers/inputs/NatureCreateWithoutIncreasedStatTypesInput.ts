import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferenceCreateNestedManyWithoutNatureInput } from "../inputs/NatureBattleStylePreferenceCreateNestedManyWithoutNatureInput";
import { StatCreateNestedOneWithoutNaturesIncreasedInput } from "../inputs/StatCreateNestedOneWithoutNaturesIncreasedInput";
import { StatCreateNestedOneWithoutNaturesInput } from "../inputs/StatCreateNestedOneWithoutNaturesInput";
import { TypeCreateNestedManyWithoutNaturesInput } from "../inputs/TypeCreateNestedManyWithoutNaturesInput";

@TypeGraphQL.InputType("NatureCreateWithoutIncreasedStatTypesInput", {})
export class NatureCreateWithoutIncreasedStatTypesInput {
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

  @TypeGraphQL.Field(_type => StatCreateNestedOneWithoutNaturesInput, {
    nullable: false
  })
  decreasedStat!: StatCreateNestedOneWithoutNaturesInput;

  @TypeGraphQL.Field(_type => StatCreateNestedOneWithoutNaturesIncreasedInput, {
    nullable: false
  })
  increasedStat!: StatCreateNestedOneWithoutNaturesIncreasedInput;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceCreateNestedManyWithoutNatureInput, {
    nullable: true
  })
  battleStylePreferences?: NatureBattleStylePreferenceCreateNestedManyWithoutNatureInput | undefined;

  @TypeGraphQL.Field(_type => TypeCreateNestedManyWithoutNaturesInput, {
    nullable: true
  })
  decreasedStatTypes?: TypeCreateNestedManyWithoutNaturesInput | undefined;
}
