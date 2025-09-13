import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateManyDamageClassInputEnvelope } from "../inputs/MovesCreateManyDamageClassInputEnvelope";
import { MovesCreateOrConnectWithoutDamageClassInput } from "../inputs/MovesCreateOrConnectWithoutDamageClassInput";
import { MovesCreateWithoutDamageClassInput } from "../inputs/MovesCreateWithoutDamageClassInput";
import { MovesScalarWhereInput } from "../inputs/MovesScalarWhereInput";
import { MovesUpdateManyWithWhereWithoutDamageClassInput } from "../inputs/MovesUpdateManyWithWhereWithoutDamageClassInput";
import { MovesUpdateWithWhereUniqueWithoutDamageClassInput } from "../inputs/MovesUpdateWithWhereUniqueWithoutDamageClassInput";
import { MovesUpsertWithWhereUniqueWithoutDamageClassInput } from "../inputs/MovesUpsertWithWhereUniqueWithoutDamageClassInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesUpdateManyWithoutDamageClassNestedInput", {})
export class MovesUpdateManyWithoutDamageClassNestedInput {
  @TypeGraphQL.Field(_type => [MovesCreateWithoutDamageClassInput], {
    nullable: true
  })
  create?: MovesCreateWithoutDamageClassInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesCreateOrConnectWithoutDamageClassInput], {
    nullable: true
  })
  connectOrCreate?: MovesCreateOrConnectWithoutDamageClassInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesUpsertWithWhereUniqueWithoutDamageClassInput], {
    nullable: true
  })
  upsert?: MovesUpsertWithWhereUniqueWithoutDamageClassInput[] | undefined;

  @TypeGraphQL.Field(_type => MovesCreateManyDamageClassInputEnvelope, {
    nullable: true
  })
  createMany?: MovesCreateManyDamageClassInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovesWhereUniqueInput], {
    nullable: true
  })
  set?: MovesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MovesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesWhereUniqueInput], {
    nullable: true
  })
  delete?: MovesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesWhereUniqueInput], {
    nullable: true
  })
  connect?: MovesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesUpdateWithWhereUniqueWithoutDamageClassInput], {
    nullable: true
  })
  update?: MovesUpdateWithWhereUniqueWithoutDamageClassInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesUpdateManyWithWhereWithoutDamageClassInput], {
    nullable: true
  })
  updateMany?: MovesUpdateManyWithWhereWithoutDamageClassInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovesScalarWhereInput[] | undefined;
}
