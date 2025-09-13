import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestCombosScalarWhereInput } from "../inputs/SuperContestCombosScalarWhereInput";
import { SuperContestCombosUpdateManyMutationInput } from "../inputs/SuperContestCombosUpdateManyMutationInput";

@TypeGraphQL.InputType("SuperContestCombosUpdateManyWithWhereWithoutSecondMoveInput", {})
export class SuperContestCombosUpdateManyWithWhereWithoutSecondMoveInput {
  @TypeGraphQL.Field(_type => SuperContestCombosScalarWhereInput, {
    nullable: false
  })
  where!: SuperContestCombosScalarWhereInput;

  @TypeGraphQL.Field(_type => SuperContestCombosUpdateManyMutationInput, {
    nullable: false
  })
  data!: SuperContestCombosUpdateManyMutationInput;
}
