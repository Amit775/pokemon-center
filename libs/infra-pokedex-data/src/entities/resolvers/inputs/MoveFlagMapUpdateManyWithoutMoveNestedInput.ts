import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagMapCreateManyMoveInputEnvelope } from "../inputs/MoveFlagMapCreateManyMoveInputEnvelope";
import { MoveFlagMapCreateOrConnectWithoutMoveInput } from "../inputs/MoveFlagMapCreateOrConnectWithoutMoveInput";
import { MoveFlagMapCreateWithoutMoveInput } from "../inputs/MoveFlagMapCreateWithoutMoveInput";
import { MoveFlagMapScalarWhereInput } from "../inputs/MoveFlagMapScalarWhereInput";
import { MoveFlagMapUpdateManyWithWhereWithoutMoveInput } from "../inputs/MoveFlagMapUpdateManyWithWhereWithoutMoveInput";
import { MoveFlagMapUpdateWithWhereUniqueWithoutMoveInput } from "../inputs/MoveFlagMapUpdateWithWhereUniqueWithoutMoveInput";
import { MoveFlagMapUpsertWithWhereUniqueWithoutMoveInput } from "../inputs/MoveFlagMapUpsertWithWhereUniqueWithoutMoveInput";
import { MoveFlagMapWhereUniqueInput } from "../inputs/MoveFlagMapWhereUniqueInput";

@TypeGraphQL.InputType("MoveFlagMapUpdateManyWithoutMoveNestedInput", {})
export class MoveFlagMapUpdateManyWithoutMoveNestedInput {
  @TypeGraphQL.Field(_type => [MoveFlagMapCreateWithoutMoveInput], {
    nullable: true
  })
  create?: MoveFlagMapCreateWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagMapCreateOrConnectWithoutMoveInput], {
    nullable: true
  })
  connectOrCreate?: MoveFlagMapCreateOrConnectWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagMapUpsertWithWhereUniqueWithoutMoveInput], {
    nullable: true
  })
  upsert?: MoveFlagMapUpsertWithWhereUniqueWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveFlagMapCreateManyMoveInputEnvelope, {
    nullable: true
  })
  createMany?: MoveFlagMapCreateManyMoveInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [MoveFlagMapUpdateWithWhereUniqueWithoutMoveInput], {
    nullable: true
  })
  update?: MoveFlagMapUpdateWithWhereUniqueWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagMapUpdateManyWithWhereWithoutMoveInput], {
    nullable: true
  })
  updateMany?: MoveFlagMapUpdateManyWithWhereWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagMapScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MoveFlagMapScalarWhereInput[] | undefined;
}
