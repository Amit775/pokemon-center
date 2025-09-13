import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestCombosCreateManyFirstMoveInputEnvelope } from "../inputs/SuperContestCombosCreateManyFirstMoveInputEnvelope";
import { SuperContestCombosCreateOrConnectWithoutFirstMoveInput } from "../inputs/SuperContestCombosCreateOrConnectWithoutFirstMoveInput";
import { SuperContestCombosCreateWithoutFirstMoveInput } from "../inputs/SuperContestCombosCreateWithoutFirstMoveInput";
import { SuperContestCombosScalarWhereInput } from "../inputs/SuperContestCombosScalarWhereInput";
import { SuperContestCombosUpdateManyWithWhereWithoutFirstMoveInput } from "../inputs/SuperContestCombosUpdateManyWithWhereWithoutFirstMoveInput";
import { SuperContestCombosUpdateWithWhereUniqueWithoutFirstMoveInput } from "../inputs/SuperContestCombosUpdateWithWhereUniqueWithoutFirstMoveInput";
import { SuperContestCombosUpsertWithWhereUniqueWithoutFirstMoveInput } from "../inputs/SuperContestCombosUpsertWithWhereUniqueWithoutFirstMoveInput";
import { SuperContestCombosWhereUniqueInput } from "../inputs/SuperContestCombosWhereUniqueInput";

@TypeGraphQL.InputType("SuperContestCombosUpdateManyWithoutFirstMoveNestedInput", {})
export class SuperContestCombosUpdateManyWithoutFirstMoveNestedInput {
  @TypeGraphQL.Field(_type => [SuperContestCombosCreateWithoutFirstMoveInput], {
    nullable: true
  })
  create?: SuperContestCombosCreateWithoutFirstMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestCombosCreateOrConnectWithoutFirstMoveInput], {
    nullable: true
  })
  connectOrCreate?: SuperContestCombosCreateOrConnectWithoutFirstMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestCombosUpsertWithWhereUniqueWithoutFirstMoveInput], {
    nullable: true
  })
  upsert?: SuperContestCombosUpsertWithWhereUniqueWithoutFirstMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => SuperContestCombosCreateManyFirstMoveInputEnvelope, {
    nullable: true
  })
  createMany?: SuperContestCombosCreateManyFirstMoveInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SuperContestCombosWhereUniqueInput], {
    nullable: true
  })
  set?: SuperContestCombosWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestCombosWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SuperContestCombosWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestCombosWhereUniqueInput], {
    nullable: true
  })
  delete?: SuperContestCombosWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestCombosWhereUniqueInput], {
    nullable: true
  })
  connect?: SuperContestCombosWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestCombosUpdateWithWhereUniqueWithoutFirstMoveInput], {
    nullable: true
  })
  update?: SuperContestCombosUpdateWithWhereUniqueWithoutFirstMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestCombosUpdateManyWithWhereWithoutFirstMoveInput], {
    nullable: true
  })
  updateMany?: SuperContestCombosUpdateManyWithWhereWithoutFirstMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestCombosScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SuperContestCombosScalarWhereInput[] | undefined;
}
