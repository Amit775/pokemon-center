import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateWithoutEvolutionChainInput } from "../inputs/PokemonSpeciesCreateWithoutEvolutionChainInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesCreateOrConnectWithoutEvolutionChainInput", {})
export class PokemonSpeciesCreateOrConnectWithoutEvolutionChainInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonSpeciesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateWithoutEvolutionChainInput, {
    nullable: false
  })
  create!: PokemonSpeciesCreateWithoutEvolutionChainInput;
}
