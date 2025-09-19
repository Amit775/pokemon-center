import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestComboCreateManySecondMoveInputEnvelope } from "../inputs/ContestComboCreateManySecondMoveInputEnvelope";
import { ContestComboCreateOrConnectWithoutSecondMoveInput } from "../inputs/ContestComboCreateOrConnectWithoutSecondMoveInput";
import { ContestComboCreateWithoutSecondMoveInput } from "../inputs/ContestComboCreateWithoutSecondMoveInput";
import { ContestComboScalarWhereInput } from "../inputs/ContestComboScalarWhereInput";
import { ContestComboUpdateManyWithWhereWithoutSecondMoveInput } from "../inputs/ContestComboUpdateManyWithWhereWithoutSecondMoveInput";
import { ContestComboUpdateWithWhereUniqueWithoutSecondMoveInput } from "../inputs/ContestComboUpdateWithWhereUniqueWithoutSecondMoveInput";
import { ContestComboUpsertWithWhereUniqueWithoutSecondMoveInput } from "../inputs/ContestComboUpsertWithWhereUniqueWithoutSecondMoveInput";
import { ContestComboWhereUniqueInput } from "../inputs/ContestComboWhereUniqueInput";

@TypeGraphQL.InputType("ContestComboUpdateManyWithoutSecondMoveNestedInput", {})
export class ContestComboUpdateManyWithoutSecondMoveNestedInput {
  @TypeGraphQL.Field(_type => [ContestComboCreateWithoutSecondMoveInput], {
    nullable: true
  })
  create?: ContestComboCreateWithoutSecondMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestComboCreateOrConnectWithoutSecondMoveInput], {
    nullable: true
  })
  connectOrCreate?: ContestComboCreateOrConnectWithoutSecondMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestComboUpsertWithWhereUniqueWithoutSecondMoveInput], {
    nullable: true
  })
  upsert?: ContestComboUpsertWithWhereUniqueWithoutSecondMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => ContestComboCreateManySecondMoveInputEnvelope, {
    nullable: true
  })
  createMany?: ContestComboCreateManySecondMoveInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ContestComboWhereUniqueInput], {
    nullable: true
  })
  set?: ContestComboWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestComboWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ContestComboWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestComboWhereUniqueInput], {
    nullable: true
  })
  delete?: ContestComboWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestComboWhereUniqueInput], {
    nullable: true
  })
  connect?: ContestComboWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestComboUpdateWithWhereUniqueWithoutSecondMoveInput], {
    nullable: true
  })
  update?: ContestComboUpdateWithWhereUniqueWithoutSecondMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestComboUpdateManyWithWhereWithoutSecondMoveInput], {
    nullable: true
  })
  updateMany?: ContestComboUpdateManyWithWhereWithoutSecondMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestComboScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ContestComboScalarWhereInput[] | undefined;
}
