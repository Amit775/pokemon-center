import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateManyEffectInputEnvelope } from "../inputs/MovesCreateManyEffectInputEnvelope";
import { MovesCreateOrConnectWithoutEffectInput } from "../inputs/MovesCreateOrConnectWithoutEffectInput";
import { MovesCreateWithoutEffectInput } from "../inputs/MovesCreateWithoutEffectInput";
import { MovesScalarWhereInput } from "../inputs/MovesScalarWhereInput";
import { MovesUpdateManyWithWhereWithoutEffectInput } from "../inputs/MovesUpdateManyWithWhereWithoutEffectInput";
import { MovesUpdateWithWhereUniqueWithoutEffectInput } from "../inputs/MovesUpdateWithWhereUniqueWithoutEffectInput";
import { MovesUpsertWithWhereUniqueWithoutEffectInput } from "../inputs/MovesUpsertWithWhereUniqueWithoutEffectInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesUpdateManyWithoutEffectNestedInput", {})
export class MovesUpdateManyWithoutEffectNestedInput {
  @TypeGraphQL.Field(_type => [MovesCreateWithoutEffectInput], {
    nullable: true
  })
  create?: MovesCreateWithoutEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesCreateOrConnectWithoutEffectInput], {
    nullable: true
  })
  connectOrCreate?: MovesCreateOrConnectWithoutEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesUpsertWithWhereUniqueWithoutEffectInput], {
    nullable: true
  })
  upsert?: MovesUpsertWithWhereUniqueWithoutEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => MovesCreateManyEffectInputEnvelope, {
    nullable: true
  })
  createMany?: MovesCreateManyEffectInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [MovesUpdateWithWhereUniqueWithoutEffectInput], {
    nullable: true
  })
  update?: MovesUpdateWithWhereUniqueWithoutEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesUpdateManyWithWhereWithoutEffectInput], {
    nullable: true
  })
  updateMany?: MovesUpdateManyWithWhereWithoutEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovesScalarWhereInput[] | undefined;
}
