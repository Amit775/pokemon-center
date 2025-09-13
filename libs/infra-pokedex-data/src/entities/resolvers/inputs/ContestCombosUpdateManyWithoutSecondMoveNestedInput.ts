import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestCombosCreateManySecondMoveInputEnvelope } from "../inputs/ContestCombosCreateManySecondMoveInputEnvelope";
import { ContestCombosCreateOrConnectWithoutSecondMoveInput } from "../inputs/ContestCombosCreateOrConnectWithoutSecondMoveInput";
import { ContestCombosCreateWithoutSecondMoveInput } from "../inputs/ContestCombosCreateWithoutSecondMoveInput";
import { ContestCombosScalarWhereInput } from "../inputs/ContestCombosScalarWhereInput";
import { ContestCombosUpdateManyWithWhereWithoutSecondMoveInput } from "../inputs/ContestCombosUpdateManyWithWhereWithoutSecondMoveInput";
import { ContestCombosUpdateWithWhereUniqueWithoutSecondMoveInput } from "../inputs/ContestCombosUpdateWithWhereUniqueWithoutSecondMoveInput";
import { ContestCombosUpsertWithWhereUniqueWithoutSecondMoveInput } from "../inputs/ContestCombosUpsertWithWhereUniqueWithoutSecondMoveInput";
import { ContestCombosWhereUniqueInput } from "../inputs/ContestCombosWhereUniqueInput";

@TypeGraphQL.InputType("ContestCombosUpdateManyWithoutSecondMoveNestedInput", {})
export class ContestCombosUpdateManyWithoutSecondMoveNestedInput {
  @TypeGraphQL.Field(_type => [ContestCombosCreateWithoutSecondMoveInput], {
    nullable: true
  })
  create?: ContestCombosCreateWithoutSecondMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestCombosCreateOrConnectWithoutSecondMoveInput], {
    nullable: true
  })
  connectOrCreate?: ContestCombosCreateOrConnectWithoutSecondMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestCombosUpsertWithWhereUniqueWithoutSecondMoveInput], {
    nullable: true
  })
  upsert?: ContestCombosUpsertWithWhereUniqueWithoutSecondMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => ContestCombosCreateManySecondMoveInputEnvelope, {
    nullable: true
  })
  createMany?: ContestCombosCreateManySecondMoveInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ContestCombosWhereUniqueInput], {
    nullable: true
  })
  set?: ContestCombosWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestCombosWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ContestCombosWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestCombosWhereUniqueInput], {
    nullable: true
  })
  delete?: ContestCombosWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestCombosWhereUniqueInput], {
    nullable: true
  })
  connect?: ContestCombosWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestCombosUpdateWithWhereUniqueWithoutSecondMoveInput], {
    nullable: true
  })
  update?: ContestCombosUpdateWithWhereUniqueWithoutSecondMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestCombosUpdateManyWithWhereWithoutSecondMoveInput], {
    nullable: true
  })
  updateMany?: ContestCombosUpdateManyWithWhereWithoutSecondMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestCombosScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ContestCombosScalarWhereInput[] | undefined;
}
