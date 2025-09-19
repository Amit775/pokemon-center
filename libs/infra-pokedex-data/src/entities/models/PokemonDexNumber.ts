import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Pokedex } from "../models/Pokedex";
import { PokemonSpecies } from "../models/PokemonSpecies";

@TypeGraphQL.ObjectType("PokemonDexNumber", {})
export class PokemonDexNumber {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  species_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokedex_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokedex_number!: number;

  species?: PokemonSpecies;

  pokedex?: Pokedex;
}
