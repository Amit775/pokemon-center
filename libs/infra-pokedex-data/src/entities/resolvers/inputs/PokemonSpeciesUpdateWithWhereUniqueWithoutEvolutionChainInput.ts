import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesUpdateWithoutEvolutionChainInput } from "../inputs/PokemonSpeciesUpdateWithoutEvolutionChainInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesUpdateWithWhereUniqueWithoutEvolutionChainInput", {})
export class PokemonSpeciesUpdateWithWhereUniqueWithoutEvolutionChainInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonSpeciesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateWithoutEvolutionChainInput, {
    nullable: false
  })
  data!: PokemonSpeciesUpdateWithoutEvolutionChainInput;
}
