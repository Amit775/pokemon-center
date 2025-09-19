import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestComboCreateWithoutSecondMoveInput } from "../inputs/ContestComboCreateWithoutSecondMoveInput";
import { ContestComboWhereUniqueInput } from "../inputs/ContestComboWhereUniqueInput";

@TypeGraphQL.InputType("ContestComboCreateOrConnectWithoutSecondMoveInput", {})
export class ContestComboCreateOrConnectWithoutSecondMoveInput {
  @TypeGraphQL.Field(_type => ContestComboWhereUniqueInput, {
    nullable: false
  })
  where!: ContestComboWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContestComboCreateWithoutSecondMoveInput, {
    nullable: false
  })
  create!: ContestComboCreateWithoutSecondMoveInput;
}
