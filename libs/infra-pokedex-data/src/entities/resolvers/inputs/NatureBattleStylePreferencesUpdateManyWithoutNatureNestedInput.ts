import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferencesCreateManyNatureInputEnvelope } from "../inputs/NatureBattleStylePreferencesCreateManyNatureInputEnvelope";
import { NatureBattleStylePreferencesCreateOrConnectWithoutNatureInput } from "../inputs/NatureBattleStylePreferencesCreateOrConnectWithoutNatureInput";
import { NatureBattleStylePreferencesCreateWithoutNatureInput } from "../inputs/NatureBattleStylePreferencesCreateWithoutNatureInput";
import { NatureBattleStylePreferencesScalarWhereInput } from "../inputs/NatureBattleStylePreferencesScalarWhereInput";
import { NatureBattleStylePreferencesUpdateManyWithWhereWithoutNatureInput } from "../inputs/NatureBattleStylePreferencesUpdateManyWithWhereWithoutNatureInput";
import { NatureBattleStylePreferencesUpdateWithWhereUniqueWithoutNatureInput } from "../inputs/NatureBattleStylePreferencesUpdateWithWhereUniqueWithoutNatureInput";
import { NatureBattleStylePreferencesUpsertWithWhereUniqueWithoutNatureInput } from "../inputs/NatureBattleStylePreferencesUpsertWithWhereUniqueWithoutNatureInput";
import { NatureBattleStylePreferencesWhereUniqueInput } from "../inputs/NatureBattleStylePreferencesWhereUniqueInput";

@TypeGraphQL.InputType("NatureBattleStylePreferencesUpdateManyWithoutNatureNestedInput", {})
export class NatureBattleStylePreferencesUpdateManyWithoutNatureNestedInput {
  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesCreateWithoutNatureInput], {
    nullable: true
  })
  create?: NatureBattleStylePreferencesCreateWithoutNatureInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesCreateOrConnectWithoutNatureInput], {
    nullable: true
  })
  connectOrCreate?: NatureBattleStylePreferencesCreateOrConnectWithoutNatureInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesUpsertWithWhereUniqueWithoutNatureInput], {
    nullable: true
  })
  upsert?: NatureBattleStylePreferencesUpsertWithWhereUniqueWithoutNatureInput[] | undefined;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesCreateManyNatureInputEnvelope, {
    nullable: true
  })
  createMany?: NatureBattleStylePreferencesCreateManyNatureInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesWhereUniqueInput], {
    nullable: true
  })
  set?: NatureBattleStylePreferencesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: NatureBattleStylePreferencesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesWhereUniqueInput], {
    nullable: true
  })
  delete?: NatureBattleStylePreferencesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesWhereUniqueInput], {
    nullable: true
  })
  connect?: NatureBattleStylePreferencesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesUpdateWithWhereUniqueWithoutNatureInput], {
    nullable: true
  })
  update?: NatureBattleStylePreferencesUpdateWithWhereUniqueWithoutNatureInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesUpdateManyWithWhereWithoutNatureInput], {
    nullable: true
  })
  updateMany?: NatureBattleStylePreferencesUpdateManyWithWhereWithoutNatureInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: NatureBattleStylePreferencesScalarWhereInput[] | undefined;
}
