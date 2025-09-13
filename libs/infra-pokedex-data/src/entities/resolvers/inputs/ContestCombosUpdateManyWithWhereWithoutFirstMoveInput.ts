import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestCombosScalarWhereInput } from "../inputs/ContestCombosScalarWhereInput";
import { ContestCombosUpdateManyMutationInput } from "../inputs/ContestCombosUpdateManyMutationInput";

@TypeGraphQL.InputType("ContestCombosUpdateManyWithWhereWithoutFirstMoveInput", {})
export class ContestCombosUpdateManyWithWhereWithoutFirstMoveInput {
  @TypeGraphQL.Field(_type => ContestCombosScalarWhereInput, {
    nullable: false
  })
  where!: ContestCombosScalarWhereInput;

  @TypeGraphQL.Field(_type => ContestCombosUpdateManyMutationInput, {
    nullable: false
  })
  data!: ContestCombosUpdateManyMutationInput;
}
