import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestComboCreateWithoutSecondMoveInput } from "../inputs/SuperContestComboCreateWithoutSecondMoveInput";
import { SuperContestComboWhereUniqueInput } from "../inputs/SuperContestComboWhereUniqueInput";

@TypeGraphQL.InputType("SuperContestComboCreateOrConnectWithoutSecondMoveInput", {})
export class SuperContestComboCreateOrConnectWithoutSecondMoveInput {
  @TypeGraphQL.Field(_type => SuperContestComboWhereUniqueInput, {
    nullable: false
  })
  where!: SuperContestComboWhereUniqueInput;

  @TypeGraphQL.Field(_type => SuperContestComboCreateWithoutSecondMoveInput, {
    nullable: false
  })
  create!: SuperContestComboCreateWithoutSecondMoveInput;
}
