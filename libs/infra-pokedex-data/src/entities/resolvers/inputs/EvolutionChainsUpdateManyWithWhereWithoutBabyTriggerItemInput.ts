import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainsScalarWhereInput } from "../inputs/EvolutionChainsScalarWhereInput";
import { EvolutionChainsUpdateManyMutationInput } from "../inputs/EvolutionChainsUpdateManyMutationInput";

@TypeGraphQL.InputType("EvolutionChainsUpdateManyWithWhereWithoutBabyTriggerItemInput", {})
export class EvolutionChainsUpdateManyWithWhereWithoutBabyTriggerItemInput {
  @TypeGraphQL.Field(_type => EvolutionChainsScalarWhereInput, {
    nullable: false
  })
  where!: EvolutionChainsScalarWhereInput;

  @TypeGraphQL.Field(_type => EvolutionChainsUpdateManyMutationInput, {
    nullable: false
  })
  data!: EvolutionChainsUpdateManyMutationInput;
}
