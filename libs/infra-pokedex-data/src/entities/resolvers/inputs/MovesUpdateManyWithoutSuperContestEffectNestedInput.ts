import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateManySuperContestEffectInputEnvelope } from "../inputs/MovesCreateManySuperContestEffectInputEnvelope";
import { MovesCreateOrConnectWithoutSuperContestEffectInput } from "../inputs/MovesCreateOrConnectWithoutSuperContestEffectInput";
import { MovesCreateWithoutSuperContestEffectInput } from "../inputs/MovesCreateWithoutSuperContestEffectInput";
import { MovesScalarWhereInput } from "../inputs/MovesScalarWhereInput";
import { MovesUpdateManyWithWhereWithoutSuperContestEffectInput } from "../inputs/MovesUpdateManyWithWhereWithoutSuperContestEffectInput";
import { MovesUpdateWithWhereUniqueWithoutSuperContestEffectInput } from "../inputs/MovesUpdateWithWhereUniqueWithoutSuperContestEffectInput";
import { MovesUpsertWithWhereUniqueWithoutSuperContestEffectInput } from "../inputs/MovesUpsertWithWhereUniqueWithoutSuperContestEffectInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesUpdateManyWithoutSuperContestEffectNestedInput", {})
export class MovesUpdateManyWithoutSuperContestEffectNestedInput {
  @TypeGraphQL.Field(_type => [MovesCreateWithoutSuperContestEffectInput], {
    nullable: true
  })
  create?: MovesCreateWithoutSuperContestEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesCreateOrConnectWithoutSuperContestEffectInput], {
    nullable: true
  })
  connectOrCreate?: MovesCreateOrConnectWithoutSuperContestEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesUpsertWithWhereUniqueWithoutSuperContestEffectInput], {
    nullable: true
  })
  upsert?: MovesUpsertWithWhereUniqueWithoutSuperContestEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => MovesCreateManySuperContestEffectInputEnvelope, {
    nullable: true
  })
  createMany?: MovesCreateManySuperContestEffectInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [MovesUpdateWithWhereUniqueWithoutSuperContestEffectInput], {
    nullable: true
  })
  update?: MovesUpdateWithWhereUniqueWithoutSuperContestEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesUpdateManyWithWhereWithoutSuperContestEffectInput], {
    nullable: true
  })
  updateMany?: MovesUpdateManyWithWhereWithoutSuperContestEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovesScalarWhereInput[] | undefined;
}
