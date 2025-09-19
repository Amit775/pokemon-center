import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestComboCreateManyFirstMoveInputEnvelope } from "../inputs/ContestComboCreateManyFirstMoveInputEnvelope";
import { ContestComboCreateOrConnectWithoutFirstMoveInput } from "../inputs/ContestComboCreateOrConnectWithoutFirstMoveInput";
import { ContestComboCreateWithoutFirstMoveInput } from "../inputs/ContestComboCreateWithoutFirstMoveInput";
import { ContestComboScalarWhereInput } from "../inputs/ContestComboScalarWhereInput";
import { ContestComboUpdateManyWithWhereWithoutFirstMoveInput } from "../inputs/ContestComboUpdateManyWithWhereWithoutFirstMoveInput";
import { ContestComboUpdateWithWhereUniqueWithoutFirstMoveInput } from "../inputs/ContestComboUpdateWithWhereUniqueWithoutFirstMoveInput";
import { ContestComboUpsertWithWhereUniqueWithoutFirstMoveInput } from "../inputs/ContestComboUpsertWithWhereUniqueWithoutFirstMoveInput";
import { ContestComboWhereUniqueInput } from "../inputs/ContestComboWhereUniqueInput";

@TypeGraphQL.InputType("ContestComboUpdateManyWithoutFirstMoveNestedInput", {})
export class ContestComboUpdateManyWithoutFirstMoveNestedInput {
  @TypeGraphQL.Field(_type => [ContestComboCreateWithoutFirstMoveInput], {
    nullable: true
  })
  create?: ContestComboCreateWithoutFirstMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestComboCreateOrConnectWithoutFirstMoveInput], {
    nullable: true
  })
  connectOrCreate?: ContestComboCreateOrConnectWithoutFirstMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestComboUpsertWithWhereUniqueWithoutFirstMoveInput], {
    nullable: true
  })
  upsert?: ContestComboUpsertWithWhereUniqueWithoutFirstMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => ContestComboCreateManyFirstMoveInputEnvelope, {
    nullable: true
  })
  createMany?: ContestComboCreateManyFirstMoveInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ContestComboUpdateWithWhereUniqueWithoutFirstMoveInput], {
    nullable: true
  })
  update?: ContestComboUpdateWithWhereUniqueWithoutFirstMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestComboUpdateManyWithWhereWithoutFirstMoveInput], {
    nullable: true
  })
  updateMany?: ContestComboUpdateManyWithWhereWithoutFirstMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestComboScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ContestComboScalarWhereInput[] | undefined;
}
