import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateManyContestEffectInputEnvelope } from "../inputs/MoveCreateManyContestEffectInputEnvelope";
import { MoveCreateOrConnectWithoutContestEffectInput } from "../inputs/MoveCreateOrConnectWithoutContestEffectInput";
import { MoveCreateWithoutContestEffectInput } from "../inputs/MoveCreateWithoutContestEffectInput";
import { MoveScalarWhereInput } from "../inputs/MoveScalarWhereInput";
import { MoveUpdateManyWithWhereWithoutContestEffectInput } from "../inputs/MoveUpdateManyWithWhereWithoutContestEffectInput";
import { MoveUpdateWithWhereUniqueWithoutContestEffectInput } from "../inputs/MoveUpdateWithWhereUniqueWithoutContestEffectInput";
import { MoveUpsertWithWhereUniqueWithoutContestEffectInput } from "../inputs/MoveUpsertWithWhereUniqueWithoutContestEffectInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveUpdateManyWithoutContestEffectNestedInput", {})
export class MoveUpdateManyWithoutContestEffectNestedInput {
  @TypeGraphQL.Field(_type => [MoveCreateWithoutContestEffectInput], {
    nullable: true
  })
  create?: MoveCreateWithoutContestEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveCreateOrConnectWithoutContestEffectInput], {
    nullable: true
  })
  connectOrCreate?: MoveCreateOrConnectWithoutContestEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveUpsertWithWhereUniqueWithoutContestEffectInput], {
    nullable: true
  })
  upsert?: MoveUpsertWithWhereUniqueWithoutContestEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveCreateManyContestEffectInputEnvelope, {
    nullable: true
  })
  createMany?: MoveCreateManyContestEffectInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [MoveUpdateWithWhereUniqueWithoutContestEffectInput], {
    nullable: true
  })
  update?: MoveUpdateWithWhereUniqueWithoutContestEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveUpdateManyWithWhereWithoutContestEffectInput], {
    nullable: true
  })
  updateMany?: MoveUpdateManyWithWhereWithoutContestEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MoveScalarWhereInput[] | undefined;
}
