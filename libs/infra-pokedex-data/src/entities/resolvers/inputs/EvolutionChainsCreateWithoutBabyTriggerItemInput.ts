import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateNestedManyWithoutEvolutionChainInput } from "../inputs/PokemonSpeciesCreateNestedManyWithoutEvolutionChainInput";

@TypeGraphQL.InputType("EvolutionChainsCreateWithoutBabyTriggerItemInput", {})
export class EvolutionChainsCreateWithoutBabyTriggerItemInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateNestedManyWithoutEvolutionChainInput, {
    nullable: true
  })
  species?: PokemonSpeciesCreateNestedManyWithoutEvolutionChainInput | undefined;
}
