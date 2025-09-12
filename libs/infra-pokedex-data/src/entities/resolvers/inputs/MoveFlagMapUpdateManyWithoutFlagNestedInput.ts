import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagMapCreateManyFlagInputEnvelope } from "../inputs/MoveFlagMapCreateManyFlagInputEnvelope";
import { MoveFlagMapCreateOrConnectWithoutFlagInput } from "../inputs/MoveFlagMapCreateOrConnectWithoutFlagInput";
import { MoveFlagMapCreateWithoutFlagInput } from "../inputs/MoveFlagMapCreateWithoutFlagInput";
import { MoveFlagMapScalarWhereInput } from "../inputs/MoveFlagMapScalarWhereInput";
import { MoveFlagMapUpdateManyWithWhereWithoutFlagInput } from "../inputs/MoveFlagMapUpdateManyWithWhereWithoutFlagInput";
import { MoveFlagMapUpdateWithWhereUniqueWithoutFlagInput } from "../inputs/MoveFlagMapUpdateWithWhereUniqueWithoutFlagInput";
import { MoveFlagMapUpsertWithWhereUniqueWithoutFlagInput } from "../inputs/MoveFlagMapUpsertWithWhereUniqueWithoutFlagInput";
import { MoveFlagMapWhereUniqueInput } from "../inputs/MoveFlagMapWhereUniqueInput";

@TypeGraphQL.InputType("MoveFlagMapUpdateManyWithoutFlagNestedInput", {})
export class MoveFlagMapUpdateManyWithoutFlagNestedInput {
  @TypeGraphQL.Field(_type => [MoveFlagMapCreateWithoutFlagInput], {
    nullable: true
  })
  create?: MoveFlagMapCreateWithoutFlagInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagMapCreateOrConnectWithoutFlagInput], {
    nullable: true
  })
  connectOrCreate?: MoveFlagMapCreateOrConnectWithoutFlagInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagMapUpsertWithWhereUniqueWithoutFlagInput], {
    nullable: true
  })
  upsert?: MoveFlagMapUpsertWithWhereUniqueWithoutFlagInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveFlagMapCreateManyFlagInputEnvelope, {
    nullable: true
  })
  createMany?: MoveFlagMapCreateManyFlagInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagMapWhereUniqueInput], {
    nullable: true
  })
  set?: MoveFlagMapWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagMapWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MoveFlagMapWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagMapWhereUniqueInput], {
    nullable: true
  })
  delete?: MoveFlagMapWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagMapWhereUniqueInput], {
    nullable: true
  })
  connect?: MoveFlagMapWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagMapUpdateWithWhereUniqueWithoutFlagInput], {
    nullable: true
  })
  update?: MoveFlagMapUpdateWithWhereUniqueWithoutFlagInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagMapUpdateManyWithWhereWithoutFlagInput], {
    nullable: true
  })
  updateMany?: MoveFlagMapUpdateManyWithWhereWithoutFlagInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagMapScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MoveFlagMapScalarWhereInput[] | undefined;
}
