import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferenceCreateManyNatureInputEnvelope } from "../inputs/NatureBattleStylePreferenceCreateManyNatureInputEnvelope";
import { NatureBattleStylePreferenceCreateOrConnectWithoutNatureInput } from "../inputs/NatureBattleStylePreferenceCreateOrConnectWithoutNatureInput";
import { NatureBattleStylePreferenceCreateWithoutNatureInput } from "../inputs/NatureBattleStylePreferenceCreateWithoutNatureInput";
import { NatureBattleStylePreferenceScalarWhereInput } from "../inputs/NatureBattleStylePreferenceScalarWhereInput";
import { NatureBattleStylePreferenceUpdateManyWithWhereWithoutNatureInput } from "../inputs/NatureBattleStylePreferenceUpdateManyWithWhereWithoutNatureInput";
import { NatureBattleStylePreferenceUpdateWithWhereUniqueWithoutNatureInput } from "../inputs/NatureBattleStylePreferenceUpdateWithWhereUniqueWithoutNatureInput";
import { NatureBattleStylePreferenceUpsertWithWhereUniqueWithoutNatureInput } from "../inputs/NatureBattleStylePreferenceUpsertWithWhereUniqueWithoutNatureInput";
import { NatureBattleStylePreferenceWhereUniqueInput } from "../inputs/NatureBattleStylePreferenceWhereUniqueInput";

@TypeGraphQL.InputType("NatureBattleStylePreferenceUpdateManyWithoutNatureNestedInput", {})
export class NatureBattleStylePreferenceUpdateManyWithoutNatureNestedInput {
  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceCreateWithoutNatureInput], {
    nullable: true
  })
  create?: NatureBattleStylePreferenceCreateWithoutNatureInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceCreateOrConnectWithoutNatureInput], {
    nullable: true
  })
  connectOrCreate?: NatureBattleStylePreferenceCreateOrConnectWithoutNatureInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceUpsertWithWhereUniqueWithoutNatureInput], {
    nullable: true
  })
  upsert?: NatureBattleStylePreferenceUpsertWithWhereUniqueWithoutNatureInput[] | undefined;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceCreateManyNatureInputEnvelope, {
    nullable: true
  })
  createMany?: NatureBattleStylePreferenceCreateManyNatureInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceWhereUniqueInput], {
    nullable: true
  })
  set?: NatureBattleStylePreferenceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceWhereUniqueInput], {
    nullable: true
  })
  disconnect?: NatureBattleStylePreferenceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceWhereUniqueInput], {
    nullable: true
  })
  delete?: NatureBattleStylePreferenceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceWhereUniqueInput], {
    nullable: true
  })
  connect?: NatureBattleStylePreferenceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceUpdateWithWhereUniqueWithoutNatureInput], {
    nullable: true
  })
  update?: NatureBattleStylePreferenceUpdateWithWhereUniqueWithoutNatureInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceUpdateManyWithWhereWithoutNatureInput], {
    nullable: true
  })
  updateMany?: NatureBattleStylePreferenceUpdateManyWithWhereWithoutNatureInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceScalarWhereInput], {
    nullable: true
  })
  deleteMany?: NatureBattleStylePreferenceScalarWhereInput[] | undefined;
}
