import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionUpdateWithoutEvolvedSpeciesInput } from "../inputs/PokemonEvolutionUpdateWithoutEvolvedSpeciesInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionUpdateWithWhereUniqueWithoutEvolvedSpeciesInput", {})
export class PokemonEvolutionUpdateWithWhereUniqueWithoutEvolvedSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonEvolutionWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEvolutionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateWithoutEvolvedSpeciesInput, {
    nullable: false
  })
  data!: PokemonEvolutionUpdateWithoutEvolvedSpeciesInput;
}
