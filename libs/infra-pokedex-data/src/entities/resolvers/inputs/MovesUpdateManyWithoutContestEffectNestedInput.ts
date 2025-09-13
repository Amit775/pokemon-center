import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateManyContestEffectInputEnvelope } from "../inputs/MovesCreateManyContestEffectInputEnvelope";
import { MovesCreateOrConnectWithoutContestEffectInput } from "../inputs/MovesCreateOrConnectWithoutContestEffectInput";
import { MovesCreateWithoutContestEffectInput } from "../inputs/MovesCreateWithoutContestEffectInput";
import { MovesScalarWhereInput } from "../inputs/MovesScalarWhereInput";
import { MovesUpdateManyWithWhereWithoutContestEffectInput } from "../inputs/MovesUpdateManyWithWhereWithoutContestEffectInput";
import { MovesUpdateWithWhereUniqueWithoutContestEffectInput } from "../inputs/MovesUpdateWithWhereUniqueWithoutContestEffectInput";
import { MovesUpsertWithWhereUniqueWithoutContestEffectInput } from "../inputs/MovesUpsertWithWhereUniqueWithoutContestEffectInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesUpdateManyWithoutContestEffectNestedInput", {})
export class MovesUpdateManyWithoutContestEffectNestedInput {
  @TypeGraphQL.Field(_type => [MovesCreateWithoutContestEffectInput], {
    nullable: true
  })
  create?: MovesCreateWithoutContestEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesCreateOrConnectWithoutContestEffectInput], {
    nullable: true
  })
  connectOrCreate?: MovesCreateOrConnectWithoutContestEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesUpsertWithWhereUniqueWithoutContestEffectInput], {
    nullable: true
  })
  upsert?: MovesUpsertWithWhereUniqueWithoutContestEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => MovesCreateManyContestEffectInputEnvelope, {
    nullable: true
  })
  createMany?: MovesCreateManyContestEffectInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [MovesUpdateWithWhereUniqueWithoutContestEffectInput], {
    nullable: true
  })
  update?: MovesUpdateWithWhereUniqueWithoutContestEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesUpdateManyWithWhereWithoutContestEffectInput], {
    nullable: true
  })
  updateMany?: MovesUpdateManyWithWhereWithoutContestEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovesScalarWhereInput[] | undefined;
}
