import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestComboScalarWhereInput } from "../inputs/ContestComboScalarWhereInput";
import { ContestComboUpdateManyMutationInput } from "../inputs/ContestComboUpdateManyMutationInput";

@TypeGraphQL.InputType("ContestComboUpdateManyWithWhereWithoutSecondMoveInput", {})
export class ContestComboUpdateManyWithWhereWithoutSecondMoveInput {
  @TypeGraphQL.Field(_type => ContestComboScalarWhereInput, {
    nullable: false
  })
  where!: ContestComboScalarWhereInput;

  @TypeGraphQL.Field(_type => ContestComboUpdateManyMutationInput, {
    nullable: false
  })
  data!: ContestComboUpdateManyMutationInput;
}
