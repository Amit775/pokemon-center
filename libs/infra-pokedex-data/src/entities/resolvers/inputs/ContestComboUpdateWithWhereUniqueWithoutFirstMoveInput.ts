import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestComboUpdateWithoutFirstMoveInput } from "../inputs/ContestComboUpdateWithoutFirstMoveInput";
import { ContestComboWhereUniqueInput } from "../inputs/ContestComboWhereUniqueInput";

@TypeGraphQL.InputType("ContestComboUpdateWithWhereUniqueWithoutFirstMoveInput", {})
export class ContestComboUpdateWithWhereUniqueWithoutFirstMoveInput {
  @TypeGraphQL.Field(_type => ContestComboWhereUniqueInput, {
    nullable: false
  })
  where!: ContestComboWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContestComboUpdateWithoutFirstMoveInput, {
    nullable: false
  })
  data!: ContestComboUpdateWithoutFirstMoveInput;
}
