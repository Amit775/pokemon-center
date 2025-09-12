import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestCombosCreateManyFirstMoveInputEnvelope } from "../inputs/ContestCombosCreateManyFirstMoveInputEnvelope";
import { ContestCombosCreateOrConnectWithoutFirstMoveInput } from "../inputs/ContestCombosCreateOrConnectWithoutFirstMoveInput";
import { ContestCombosCreateWithoutFirstMoveInput } from "../inputs/ContestCombosCreateWithoutFirstMoveInput";
import { ContestCombosScalarWhereInput } from "../inputs/ContestCombosScalarWhereInput";
import { ContestCombosUpdateManyWithWhereWithoutFirstMoveInput } from "../inputs/ContestCombosUpdateManyWithWhereWithoutFirstMoveInput";
import { ContestCombosUpdateWithWhereUniqueWithoutFirstMoveInput } from "../inputs/ContestCombosUpdateWithWhereUniqueWithoutFirstMoveInput";
import { ContestCombosUpsertWithWhereUniqueWithoutFirstMoveInput } from "../inputs/ContestCombosUpsertWithWhereUniqueWithoutFirstMoveInput";
import { ContestCombosWhereUniqueInput } from "../inputs/ContestCombosWhereUniqueInput";

@TypeGraphQL.InputType("ContestCombosUpdateManyWithoutFirstMoveNestedInput", {})
export class ContestCombosUpdateManyWithoutFirstMoveNestedInput {
  @TypeGraphQL.Field(_type => [ContestCombosCreateWithoutFirstMoveInput], {
    nullable: true
  })
  create?: ContestCombosCreateWithoutFirstMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestCombosCreateOrConnectWithoutFirstMoveInput], {
    nullable: true
  })
  connectOrCreate?: ContestCombosCreateOrConnectWithoutFirstMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestCombosUpsertWithWhereUniqueWithoutFirstMoveInput], {
    nullable: true
  })
  upsert?: ContestCombosUpsertWithWhereUniqueWithoutFirstMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => ContestCombosCreateManyFirstMoveInputEnvelope, {
    nullable: true
  })
  createMany?: ContestCombosCreateManyFirstMoveInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ContestCombosUpdateWithWhereUniqueWithoutFirstMoveInput], {
    nullable: true
  })
  update?: ContestCombosUpdateWithWhereUniqueWithoutFirstMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestCombosUpdateManyWithWhereWithoutFirstMoveInput], {
    nullable: true
  })
  updateMany?: ContestCombosUpdateManyWithWhereWithoutFirstMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestCombosScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ContestCombosScalarWhereInput[] | undefined;
}
