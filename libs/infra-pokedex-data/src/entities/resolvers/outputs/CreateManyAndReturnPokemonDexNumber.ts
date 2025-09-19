import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Pokedex } from "../../models/Pokedex";
import { PokemonSpecies } from "../../models/PokemonSpecies";

@TypeGraphQL.ObjectType("CreateManyAndReturnPokemonDexNumber", {})
export class CreateManyAndReturnPokemonDexNumber {
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

  @TypeGraphQL.Field(_type => PokemonSpecies, {
    nullable: false
  })
  species!: PokemonSpecies;

  @TypeGraphQL.Field(_type => Pokedex, {
    nullable: false
  })
  pokedex!: Pokedex;
}
