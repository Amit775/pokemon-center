import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemUpdateOneWithoutBabyTriggerItemsNestedInput } from "../inputs/ItemUpdateOneWithoutBabyTriggerItemsNestedInput";
import { PokemonSpeciesUpdateManyWithoutEvolutionChainNestedInput } from "../inputs/PokemonSpeciesUpdateManyWithoutEvolutionChainNestedInput";

@TypeGraphQL.InputType("EvolutionChainUpdateInput", {})
export class EvolutionChainUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => ItemUpdateOneWithoutBabyTriggerItemsNestedInput, {
    nullable: true
  })
  babyTriggerItem?: ItemUpdateOneWithoutBabyTriggerItemsNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateManyWithoutEvolutionChainNestedInput, {
    nullable: true
  })
  species?: PokemonSpeciesUpdateManyWithoutEvolutionChainNestedInput | undefined;
}
