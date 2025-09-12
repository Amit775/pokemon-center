import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateWithoutPokemonInput } from "../inputs/PokemonSpeciesCreateWithoutPokemonInput";
import { PokemonSpeciesUpdateWithoutPokemonInput } from "../inputs/PokemonSpeciesUpdateWithoutPokemonInput";
import { PokemonSpeciesWhereInput } from "../inputs/PokemonSpeciesWhereInput";

@TypeGraphQL.InputType("PokemonSpeciesUpsertWithoutPokemonInput", {})
export class PokemonSpeciesUpsertWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateWithoutPokemonInput, {
    nullable: false
  })
  update!: PokemonSpeciesUpdateWithoutPokemonInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateWithoutPokemonInput, {
    nullable: false
  })
  create!: PokemonSpeciesCreateWithoutPokemonInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesWhereInput, {
    nullable: true
  })
  where?: PokemonSpeciesWhereInput | undefined;
}
