import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateNestedOneWithoutPokemonItemsInput } from "../inputs/ItemsCreateNestedOneWithoutPokemonItemsInput";
import { PokemonCreateNestedOneWithoutItemsInput } from "../inputs/PokemonCreateNestedOneWithoutItemsInput";

@TypeGraphQL.InputType("PokemonItemsCreateWithoutVersionInput", {})
export class PokemonItemsCreateWithoutVersionInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rarity!: number;

  @TypeGraphQL.Field(_type => PokemonCreateNestedOneWithoutItemsInput, {
    nullable: false
  })
  pokemon!: PokemonCreateNestedOneWithoutItemsInput;

  @TypeGraphQL.Field(_type => ItemsCreateNestedOneWithoutPokemonItemsInput, {
    nullable: false
  })
  item!: ItemsCreateNestedOneWithoutPokemonItemsInput;
}
