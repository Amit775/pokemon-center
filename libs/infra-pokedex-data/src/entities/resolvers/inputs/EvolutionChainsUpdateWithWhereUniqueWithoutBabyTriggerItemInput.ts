import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainsUpdateWithoutBabyTriggerItemInput } from "../inputs/EvolutionChainsUpdateWithoutBabyTriggerItemInput";
import { EvolutionChainsWhereUniqueInput } from "../inputs/EvolutionChainsWhereUniqueInput";

@TypeGraphQL.InputType("EvolutionChainsUpdateWithWhereUniqueWithoutBabyTriggerItemInput", {})
export class EvolutionChainsUpdateWithWhereUniqueWithoutBabyTriggerItemInput {
  @TypeGraphQL.Field(_type => EvolutionChainsWhereUniqueInput, {
    nullable: false
  })
  where!: EvolutionChainsWhereUniqueInput;

  @TypeGraphQL.Field(_type => EvolutionChainsUpdateWithoutBabyTriggerItemInput, {
    nullable: false
  })
  data!: EvolutionChainsUpdateWithoutBabyTriggerItemInput;
}
