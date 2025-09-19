import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateNestedOneWithoutBabyTriggerItemsInput } from "../inputs/ItemCreateNestedOneWithoutBabyTriggerItemsInput";
import { PokemonSpeciesCreateNestedManyWithoutEvolutionChainInput } from "../inputs/PokemonSpeciesCreateNestedManyWithoutEvolutionChainInput";

@TypeGraphQL.InputType("EvolutionChainCreateInput", {})
export class EvolutionChainCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => ItemCreateNestedOneWithoutBabyTriggerItemsInput, {
    nullable: true
  })
  babyTriggerItem?: ItemCreateNestedOneWithoutBabyTriggerItemsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateNestedManyWithoutEvolutionChainInput, {
    nullable: true
  })
  species?: PokemonSpeciesCreateNestedManyWithoutEvolutionChainInput | undefined;
}
