import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestComboCreateManyFirstMoveInputEnvelope } from "../inputs/SuperContestComboCreateManyFirstMoveInputEnvelope";
import { SuperContestComboCreateOrConnectWithoutFirstMoveInput } from "../inputs/SuperContestComboCreateOrConnectWithoutFirstMoveInput";
import { SuperContestComboCreateWithoutFirstMoveInput } from "../inputs/SuperContestComboCreateWithoutFirstMoveInput";
import { SuperContestComboScalarWhereInput } from "../inputs/SuperContestComboScalarWhereInput";
import { SuperContestComboUpdateManyWithWhereWithoutFirstMoveInput } from "../inputs/SuperContestComboUpdateManyWithWhereWithoutFirstMoveInput";
import { SuperContestComboUpdateWithWhereUniqueWithoutFirstMoveInput } from "../inputs/SuperContestComboUpdateWithWhereUniqueWithoutFirstMoveInput";
import { SuperContestComboUpsertWithWhereUniqueWithoutFirstMoveInput } from "../inputs/SuperContestComboUpsertWithWhereUniqueWithoutFirstMoveInput";
import { SuperContestComboWhereUniqueInput } from "../inputs/SuperContestComboWhereUniqueInput";

@TypeGraphQL.InputType("SuperContestComboUpdateManyWithoutFirstMoveNestedInput", {})
export class SuperContestComboUpdateManyWithoutFirstMoveNestedInput {
  @TypeGraphQL.Field(_type => [SuperContestComboCreateWithoutFirstMoveInput], {
    nullable: true
  })
  create?: SuperContestComboCreateWithoutFirstMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestComboCreateOrConnectWithoutFirstMoveInput], {
    nullable: true
  })
  connectOrCreate?: SuperContestComboCreateOrConnectWithoutFirstMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestComboUpsertWithWhereUniqueWithoutFirstMoveInput], {
    nullable: true
  })
  upsert?: SuperContestComboUpsertWithWhereUniqueWithoutFirstMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => SuperContestComboCreateManyFirstMoveInputEnvelope, {
    nullable: true
  })
  createMany?: SuperContestComboCreateManyFirstMoveInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SuperContestComboWhereUniqueInput], {
    nullable: true
  })
  set?: SuperContestComboWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestComboWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SuperContestComboWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestComboWhereUniqueInput], {
    nullable: true
  })
  delete?: SuperContestComboWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestComboWhereUniqueInput], {
    nullable: true
  })
  connect?: SuperContestComboWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestComboUpdateWithWhereUniqueWithoutFirstMoveInput], {
    nullable: true
  })
  update?: SuperContestComboUpdateWithWhereUniqueWithoutFirstMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestComboUpdateManyWithWhereWithoutFirstMoveInput], {
    nullable: true
  })
  updateMany?: SuperContestComboUpdateManyWithWhereWithoutFirstMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestComboScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SuperContestComboScalarWhereInput[] | undefined;
}
