import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { PokemonSpeciesUpdateManyWithoutEvolutionChainNestedInput } from "../inputs/PokemonSpeciesUpdateManyWithoutEvolutionChainNestedInput";

@TypeGraphQL.InputType("EvolutionChainsUpdateWithoutBabyTriggerItemInput", {})
export class EvolutionChainsUpdateWithoutBabyTriggerItemInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateManyWithoutEvolutionChainNestedInput, {
    nullable: true
  })
  species?: PokemonSpeciesUpdateManyWithoutEvolutionChainNestedInput | undefined;
}
