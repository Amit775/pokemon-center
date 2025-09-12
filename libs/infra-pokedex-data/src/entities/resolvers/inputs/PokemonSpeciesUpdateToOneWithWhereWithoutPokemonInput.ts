import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesUpdateWithoutPokemonInput } from "../inputs/PokemonSpeciesUpdateWithoutPokemonInput";
import { PokemonSpeciesWhereInput } from "../inputs/PokemonSpeciesWhereInput";

@TypeGraphQL.InputType("PokemonSpeciesUpdateToOneWithWhereWithoutPokemonInput", {})
export class PokemonSpeciesUpdateToOneWithWhereWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesWhereInput, {
    nullable: true
  })
  where?: PokemonSpeciesWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateWithoutPokemonInput, {
    nullable: false
  })
  data!: PokemonSpeciesUpdateWithoutPokemonInput;
}
