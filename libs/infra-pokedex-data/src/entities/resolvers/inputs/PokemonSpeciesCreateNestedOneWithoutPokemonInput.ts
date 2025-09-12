import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateOrConnectWithoutPokemonInput } from "../inputs/PokemonSpeciesCreateOrConnectWithoutPokemonInput";
import { PokemonSpeciesCreateWithoutPokemonInput } from "../inputs/PokemonSpeciesCreateWithoutPokemonInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesCreateNestedOneWithoutPokemonInput", {})
export class PokemonSpeciesCreateNestedOneWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesCreateWithoutPokemonInput, {
    nullable: true
  })
  create?: PokemonSpeciesCreateWithoutPokemonInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateOrConnectWithoutPokemonInput, {
    nullable: true
  })
  connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutPokemonInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonSpeciesWhereUniqueInput | undefined;
}
