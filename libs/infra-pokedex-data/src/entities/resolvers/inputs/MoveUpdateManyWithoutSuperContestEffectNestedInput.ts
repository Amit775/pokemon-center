import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateManySuperContestEffectInputEnvelope } from "../inputs/MoveCreateManySuperContestEffectInputEnvelope";
import { MoveCreateOrConnectWithoutSuperContestEffectInput } from "../inputs/MoveCreateOrConnectWithoutSuperContestEffectInput";
import { MoveCreateWithoutSuperContestEffectInput } from "../inputs/MoveCreateWithoutSuperContestEffectInput";
import { MoveScalarWhereInput } from "../inputs/MoveScalarWhereInput";
import { MoveUpdateManyWithWhereWithoutSuperContestEffectInput } from "../inputs/MoveUpdateManyWithWhereWithoutSuperContestEffectInput";
import { MoveUpdateWithWhereUniqueWithoutSuperContestEffectInput } from "../inputs/MoveUpdateWithWhereUniqueWithoutSuperContestEffectInput";
import { MoveUpsertWithWhereUniqueWithoutSuperContestEffectInput } from "../inputs/MoveUpsertWithWhereUniqueWithoutSuperContestEffectInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveUpdateManyWithoutSuperContestEffectNestedInput", {})
export class MoveUpdateManyWithoutSuperContestEffectNestedInput {
  @TypeGraphQL.Field(_type => [MoveCreateWithoutSuperContestEffectInput], {
    nullable: true
  })
  create?: MoveCreateWithoutSuperContestEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveCreateOrConnectWithoutSuperContestEffectInput], {
    nullable: true
  })
  connectOrCreate?: MoveCreateOrConnectWithoutSuperContestEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveUpsertWithWhereUniqueWithoutSuperContestEffectInput], {
    nullable: true
  })
  upsert?: MoveUpsertWithWhereUniqueWithoutSuperContestEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveCreateManySuperContestEffectInputEnvelope, {
    nullable: true
  })
  createMany?: MoveCreateManySuperContestEffectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MoveWhereUniqueInput], {
    nullable: true
  })
  set?: MoveWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MoveWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveWhereUniqueInput], {
    nullable: true
  })
  delete?: MoveWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveWhereUniqueInput], {
    nullable: true
  })
  connect?: MoveWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveUpdateWithWhereUniqueWithoutSuperContestEffectInput], {
    nullable: true
  })
  update?: MoveUpdateWithWhereUniqueWithoutSuperContestEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveUpdateManyWithWhereWithoutSuperContestEffectInput], {
    nullable: true
  })
  updateMany?: MoveUpdateManyWithWhereWithoutSuperContestEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MoveScalarWhereInput[] | undefined;
}
