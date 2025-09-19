import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestComboCreateManySecondMoveInputEnvelope } from "../inputs/SuperContestComboCreateManySecondMoveInputEnvelope";
import { SuperContestComboCreateOrConnectWithoutSecondMoveInput } from "../inputs/SuperContestComboCreateOrConnectWithoutSecondMoveInput";
import { SuperContestComboCreateWithoutSecondMoveInput } from "../inputs/SuperContestComboCreateWithoutSecondMoveInput";
import { SuperContestComboScalarWhereInput } from "../inputs/SuperContestComboScalarWhereInput";
import { SuperContestComboUpdateManyWithWhereWithoutSecondMoveInput } from "../inputs/SuperContestComboUpdateManyWithWhereWithoutSecondMoveInput";
import { SuperContestComboUpdateWithWhereUniqueWithoutSecondMoveInput } from "../inputs/SuperContestComboUpdateWithWhereUniqueWithoutSecondMoveInput";
import { SuperContestComboUpsertWithWhereUniqueWithoutSecondMoveInput } from "../inputs/SuperContestComboUpsertWithWhereUniqueWithoutSecondMoveInput";
import { SuperContestComboWhereUniqueInput } from "../inputs/SuperContestComboWhereUniqueInput";

@TypeGraphQL.InputType("SuperContestComboUpdateManyWithoutSecondMoveNestedInput", {})
export class SuperContestComboUpdateManyWithoutSecondMoveNestedInput {
  @TypeGraphQL.Field(_type => [SuperContestComboCreateWithoutSecondMoveInput], {
    nullable: true
  })
  create?: SuperContestComboCreateWithoutSecondMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestComboCreateOrConnectWithoutSecondMoveInput], {
    nullable: true
  })
  connectOrCreate?: SuperContestComboCreateOrConnectWithoutSecondMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestComboUpsertWithWhereUniqueWithoutSecondMoveInput], {
    nullable: true
  })
  upsert?: SuperContestComboUpsertWithWhereUniqueWithoutSecondMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => SuperContestComboCreateManySecondMoveInputEnvelope, {
    nullable: true
  })
  createMany?: SuperContestComboCreateManySecondMoveInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [SuperContestComboUpdateWithWhereUniqueWithoutSecondMoveInput], {
    nullable: true
  })
  update?: SuperContestComboUpdateWithWhereUniqueWithoutSecondMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestComboUpdateManyWithWhereWithoutSecondMoveInput], {
    nullable: true
  })
  updateMany?: SuperContestComboUpdateManyWithWhereWithoutSecondMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestComboScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SuperContestComboScalarWhereInput[] | undefined;
}
