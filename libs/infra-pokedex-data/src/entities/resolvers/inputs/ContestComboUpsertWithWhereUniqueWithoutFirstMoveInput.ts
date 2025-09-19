import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestComboCreateWithoutFirstMoveInput } from "../inputs/ContestComboCreateWithoutFirstMoveInput";
import { ContestComboUpdateWithoutFirstMoveInput } from "../inputs/ContestComboUpdateWithoutFirstMoveInput";
import { ContestComboWhereUniqueInput } from "../inputs/ContestComboWhereUniqueInput";

@TypeGraphQL.InputType("ContestComboUpsertWithWhereUniqueWithoutFirstMoveInput", {})
export class ContestComboUpsertWithWhereUniqueWithoutFirstMoveInput {
  @TypeGraphQL.Field(_type => ContestComboWhereUniqueInput, {
    nullable: false
  })
  where!: ContestComboWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContestComboUpdateWithoutFirstMoveInput, {
    nullable: false
  })
  update!: ContestComboUpdateWithoutFirstMoveInput;

  @TypeGraphQL.Field(_type => ContestComboCreateWithoutFirstMoveInput, {
    nullable: false
  })
  create!: ContestComboCreateWithoutFirstMoveInput;
}
