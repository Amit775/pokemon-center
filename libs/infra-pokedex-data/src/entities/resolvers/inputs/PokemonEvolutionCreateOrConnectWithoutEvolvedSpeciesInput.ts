import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateWithoutEvolvedSpeciesInput } from "../inputs/PokemonEvolutionCreateWithoutEvolvedSpeciesInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionCreateOrConnectWithoutEvolvedSpeciesInput", {})
export class PokemonEvolutionCreateOrConnectWithoutEvolvedSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonEvolutionWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEvolutionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateWithoutEvolvedSpeciesInput, {
    nullable: false
  })
  create!: PokemonEvolutionCreateWithoutEvolvedSpeciesInput;
}
