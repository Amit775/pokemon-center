import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferenceCreateManyNatureInputEnvelope } from "../inputs/NatureBattleStylePreferenceCreateManyNatureInputEnvelope";
import { NatureBattleStylePreferenceCreateOrConnectWithoutNatureInput } from "../inputs/NatureBattleStylePreferenceCreateOrConnectWithoutNatureInput";
import { NatureBattleStylePreferenceCreateWithoutNatureInput } from "../inputs/NatureBattleStylePreferenceCreateWithoutNatureInput";
import { NatureBattleStylePreferenceWhereUniqueInput } from "../inputs/NatureBattleStylePreferenceWhereUniqueInput";

@TypeGraphQL.InputType("NatureBattleStylePreferenceCreateNestedManyWithoutNatureInput", {})
export class NatureBattleStylePreferenceCreateNestedManyWithoutNatureInput {
  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceCreateWithoutNatureInput], {
    nullable: true
  })
  create?: NatureBattleStylePreferenceCreateWithoutNatureInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceCreateOrConnectWithoutNatureInput], {
    nullable: true
  })
  connectOrCreate?: NatureBattleStylePreferenceCreateOrConnectWithoutNatureInput[] | undefined;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceCreateManyNatureInputEnvelope, {
    nullable: true
  })
  createMany?: NatureBattleStylePreferenceCreateManyNatureInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceWhereUniqueInput], {
    nullable: true
  })
  connect?: NatureBattleStylePreferenceWhereUniqueInput[] | undefined;
}
