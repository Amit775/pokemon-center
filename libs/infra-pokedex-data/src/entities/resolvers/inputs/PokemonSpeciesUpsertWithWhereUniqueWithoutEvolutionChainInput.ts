import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateWithoutEvolutionChainInput } from "../inputs/PokemonSpeciesCreateWithoutEvolutionChainInput";
import { PokemonSpeciesUpdateWithoutEvolutionChainInput } from "../inputs/PokemonSpeciesUpdateWithoutEvolutionChainInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesUpsertWithWhereUniqueWithoutEvolutionChainInput", {})
export class PokemonSpeciesUpsertWithWhereUniqueWithoutEvolutionChainInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonSpeciesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateWithoutEvolutionChainInput, {
    nullable: false
  })
  update!: PokemonSpeciesUpdateWithoutEvolutionChainInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateWithoutEvolutionChainInput, {
    nullable: false
  })
  create!: PokemonSpeciesCreateWithoutEvolutionChainInput;
}
