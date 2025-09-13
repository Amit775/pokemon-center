import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestCombosCreateManySecondMoveInputEnvelope } from "../inputs/SuperContestCombosCreateManySecondMoveInputEnvelope";
import { SuperContestCombosCreateOrConnectWithoutSecondMoveInput } from "../inputs/SuperContestCombosCreateOrConnectWithoutSecondMoveInput";
import { SuperContestCombosCreateWithoutSecondMoveInput } from "../inputs/SuperContestCombosCreateWithoutSecondMoveInput";
import { SuperContestCombosScalarWhereInput } from "../inputs/SuperContestCombosScalarWhereInput";
import { SuperContestCombosUpdateManyWithWhereWithoutSecondMoveInput } from "../inputs/SuperContestCombosUpdateManyWithWhereWithoutSecondMoveInput";
import { SuperContestCombosUpdateWithWhereUniqueWithoutSecondMoveInput } from "../inputs/SuperContestCombosUpdateWithWhereUniqueWithoutSecondMoveInput";
import { SuperContestCombosUpsertWithWhereUniqueWithoutSecondMoveInput } from "../inputs/SuperContestCombosUpsertWithWhereUniqueWithoutSecondMoveInput";
import { SuperContestCombosWhereUniqueInput } from "../inputs/SuperContestCombosWhereUniqueInput";

@TypeGraphQL.InputType("SuperContestCombosUpdateManyWithoutSecondMoveNestedInput", {})
export class SuperContestCombosUpdateManyWithoutSecondMoveNestedInput {
  @TypeGraphQL.Field(_type => [SuperContestCombosCreateWithoutSecondMoveInput], {
    nullable: true
  })
  create?: SuperContestCombosCreateWithoutSecondMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestCombosCreateOrConnectWithoutSecondMoveInput], {
    nullable: true
  })
  connectOrCreate?: SuperContestCombosCreateOrConnectWithoutSecondMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestCombosUpsertWithWhereUniqueWithoutSecondMoveInput], {
    nullable: true
  })
  upsert?: SuperContestCombosUpsertWithWhereUniqueWithoutSecondMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => SuperContestCombosCreateManySecondMoveInputEnvelope, {
    nullable: true
  })
  createMany?: SuperContestCombosCreateManySecondMoveInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [SuperContestCombosUpdateWithWhereUniqueWithoutSecondMoveInput], {
    nullable: true
  })
  update?: SuperContestCombosUpdateWithWhereUniqueWithoutSecondMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestCombosUpdateManyWithWhereWithoutSecondMoveInput], {
    nullable: true
  })
  updateMany?: SuperContestCombosUpdateManyWithWhereWithoutSecondMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestCombosScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SuperContestCombosScalarWhereInput[] | undefined;
}
