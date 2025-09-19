import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestComboCreateWithoutFirstMoveInput } from "../inputs/ContestComboCreateWithoutFirstMoveInput";
import { ContestComboWhereUniqueInput } from "../inputs/ContestComboWhereUniqueInput";

@TypeGraphQL.InputType("ContestComboCreateOrConnectWithoutFirstMoveInput", {})
export class ContestComboCreateOrConnectWithoutFirstMoveInput {
  @TypeGraphQL.Field(_type => ContestComboWhereUniqueInput, {
    nullable: false
  })
  where!: ContestComboWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContestComboCreateWithoutFirstMoveInput, {
    nullable: false
  })
  create!: ContestComboCreateWithoutFirstMoveInput;
}
