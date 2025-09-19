import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainScalarWhereInput } from "../inputs/EvolutionChainScalarWhereInput";
import { EvolutionChainUpdateManyMutationInput } from "../inputs/EvolutionChainUpdateManyMutationInput";

@TypeGraphQL.InputType("EvolutionChainUpdateManyWithWhereWithoutBabyTriggerItemInput", {})
export class EvolutionChainUpdateManyWithWhereWithoutBabyTriggerItemInput {
  @TypeGraphQL.Field(_type => EvolutionChainScalarWhereInput, {
    nullable: false
  })
  where!: EvolutionChainScalarWhereInput;

  @TypeGraphQL.Field(_type => EvolutionChainUpdateManyMutationInput, {
    nullable: false
  })
  data!: EvolutionChainUpdateManyMutationInput;
}
