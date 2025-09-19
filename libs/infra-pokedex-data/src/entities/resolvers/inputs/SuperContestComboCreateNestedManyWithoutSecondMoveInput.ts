import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestComboCreateManySecondMoveInputEnvelope } from "../inputs/SuperContestComboCreateManySecondMoveInputEnvelope";
import { SuperContestComboCreateOrConnectWithoutSecondMoveInput } from "../inputs/SuperContestComboCreateOrConnectWithoutSecondMoveInput";
import { SuperContestComboCreateWithoutSecondMoveInput } from "../inputs/SuperContestComboCreateWithoutSecondMoveInput";
import { SuperContestComboWhereUniqueInput } from "../inputs/SuperContestComboWhereUniqueInput";

@TypeGraphQL.InputType("SuperContestComboCreateNestedManyWithoutSecondMoveInput", {})
export class SuperContestComboCreateNestedManyWithoutSecondMoveInput {
  @TypeGraphQL.Field(_type => [SuperContestComboCreateWithoutSecondMoveInput], {
    nullable: true
  })
  create?: SuperContestComboCreateWithoutSecondMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestComboCreateOrConnectWithoutSecondMoveInput], {
    nullable: true
  })
  connectOrCreate?: SuperContestComboCreateOrConnectWithoutSecondMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => SuperContestComboCreateManySecondMoveInputEnvelope, {
    nullable: true
  })
  createMany?: SuperContestComboCreateManySecondMoveInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SuperContestComboWhereUniqueInput], {
    nullable: true
  })
  connect?: SuperContestComboWhereUniqueInput[] | undefined;
}
