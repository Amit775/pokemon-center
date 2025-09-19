import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestComboScalarWhereInput } from "../inputs/SuperContestComboScalarWhereInput";
import { SuperContestComboUpdateManyMutationInput } from "../inputs/SuperContestComboUpdateManyMutationInput";

@TypeGraphQL.InputType("SuperContestComboUpdateManyWithWhereWithoutFirstMoveInput", {})
export class SuperContestComboUpdateManyWithWhereWithoutFirstMoveInput {
  @TypeGraphQL.Field(_type => SuperContestComboScalarWhereInput, {
    nullable: false
  })
  where!: SuperContestComboScalarWhereInput;

  @TypeGraphQL.Field(_type => SuperContestComboUpdateManyMutationInput, {
    nullable: false
  })
  data!: SuperContestComboUpdateManyMutationInput;
}
