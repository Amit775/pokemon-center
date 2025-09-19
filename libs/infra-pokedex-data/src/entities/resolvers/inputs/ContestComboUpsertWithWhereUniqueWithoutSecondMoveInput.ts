import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestComboCreateWithoutSecondMoveInput } from "../inputs/ContestComboCreateWithoutSecondMoveInput";
import { ContestComboUpdateWithoutSecondMoveInput } from "../inputs/ContestComboUpdateWithoutSecondMoveInput";
import { ContestComboWhereUniqueInput } from "../inputs/ContestComboWhereUniqueInput";

@TypeGraphQL.InputType("ContestComboUpsertWithWhereUniqueWithoutSecondMoveInput", {})
export class ContestComboUpsertWithWhereUniqueWithoutSecondMoveInput {
  @TypeGraphQL.Field(_type => ContestComboWhereUniqueInput, {
    nullable: false
  })
  where!: ContestComboWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContestComboUpdateWithoutSecondMoveInput, {
    nullable: false
  })
  update!: ContestComboUpdateWithoutSecondMoveInput;

  @TypeGraphQL.Field(_type => ContestComboCreateWithoutSecondMoveInput, {
    nullable: false
  })
  create!: ContestComboCreateWithoutSecondMoveInput;
}
