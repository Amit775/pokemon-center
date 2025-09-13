import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsUpdateOneWithoutBabyTriggerItemsNestedInput } from "../inputs/ItemsUpdateOneWithoutBabyTriggerItemsNestedInput";
import { PokemonSpeciesUpdateManyWithoutEvolutionChainNestedInput } from "../inputs/PokemonSpeciesUpdateManyWithoutEvolutionChainNestedInput";

@TypeGraphQL.InputType("EvolutionChainsUpdateInput", {})
export class EvolutionChainsUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => ItemsUpdateOneWithoutBabyTriggerItemsNestedInput, {
    nullable: true
  })
  babyTriggerItem?: ItemsUpdateOneWithoutBabyTriggerItemsNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateManyWithoutEvolutionChainNestedInput, {
    nullable: true
  })
  species?: PokemonSpeciesUpdateManyWithoutEvolutionChainNestedInput | undefined;
}
