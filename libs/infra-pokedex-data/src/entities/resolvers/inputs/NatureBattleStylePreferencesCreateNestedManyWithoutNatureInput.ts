import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferencesCreateManyNatureInputEnvelope } from "../inputs/NatureBattleStylePreferencesCreateManyNatureInputEnvelope";
import { NatureBattleStylePreferencesCreateOrConnectWithoutNatureInput } from "../inputs/NatureBattleStylePreferencesCreateOrConnectWithoutNatureInput";
import { NatureBattleStylePreferencesCreateWithoutNatureInput } from "../inputs/NatureBattleStylePreferencesCreateWithoutNatureInput";
import { NatureBattleStylePreferencesWhereUniqueInput } from "../inputs/NatureBattleStylePreferencesWhereUniqueInput";

@TypeGraphQL.InputType("NatureBattleStylePreferencesCreateNestedManyWithoutNatureInput", {})
export class NatureBattleStylePreferencesCreateNestedManyWithoutNatureInput {
  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesCreateWithoutNatureInput], {
    nullable: true
  })
  create?: NatureBattleStylePreferencesCreateWithoutNatureInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesCreateOrConnectWithoutNatureInput], {
    nullable: true
  })
  connectOrCreate?: NatureBattleStylePreferencesCreateOrConnectWithoutNatureInput[] | undefined;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesCreateManyNatureInputEnvelope, {
    nullable: true
  })
  createMany?: NatureBattleStylePreferencesCreateManyNatureInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesWhereUniqueInput], {
    nullable: true
  })
  connect?: NatureBattleStylePreferencesWhereUniqueInput[] | undefined;
}
