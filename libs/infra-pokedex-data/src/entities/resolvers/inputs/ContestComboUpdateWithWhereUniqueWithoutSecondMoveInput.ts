import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestComboUpdateWithoutSecondMoveInput } from "../inputs/ContestComboUpdateWithoutSecondMoveInput";
import { ContestComboWhereUniqueInput } from "../inputs/ContestComboWhereUniqueInput";

@TypeGraphQL.InputType("ContestComboUpdateWithWhereUniqueWithoutSecondMoveInput", {})
export class ContestComboUpdateWithWhereUniqueWithoutSecondMoveInput {
  @TypeGraphQL.Field(_type => ContestComboWhereUniqueInput, {
    nullable: false
  })
  where!: ContestComboWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContestComboUpdateWithoutSecondMoveInput, {
    nullable: false
  })
  data!: ContestComboUpdateWithoutSecondMoveInput;
}
