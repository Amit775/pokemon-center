import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateNestedOneWithoutPokemonItemsInput } from "../inputs/ItemCreateNestedOneWithoutPokemonItemsInput";
import { PokemonCreateNestedOneWithoutItemsInput } from "../inputs/PokemonCreateNestedOneWithoutItemsInput";

@TypeGraphQL.InputType("PokemonItemCreateWithoutVersionInput", {})
export class PokemonItemCreateWithoutVersionInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rarity!: number;

  @TypeGraphQL.Field(_type => PokemonCreateNestedOneWithoutItemsInput, {
    nullable: false
  })
  pokemon!: PokemonCreateNestedOneWithoutItemsInput;

  @TypeGraphQL.Field(_type => ItemCreateNestedOneWithoutPokemonItemsInput, {
    nullable: false
  })
  item!: ItemCreateNestedOneWithoutPokemonItemsInput;
}
