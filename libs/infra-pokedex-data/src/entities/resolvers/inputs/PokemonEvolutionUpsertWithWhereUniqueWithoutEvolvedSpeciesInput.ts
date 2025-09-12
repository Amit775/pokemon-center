import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateWithoutEvolvedSpeciesInput } from "../inputs/PokemonEvolutionCreateWithoutEvolvedSpeciesInput";
import { PokemonEvolutionUpdateWithoutEvolvedSpeciesInput } from "../inputs/PokemonEvolutionUpdateWithoutEvolvedSpeciesInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionUpsertWithWhereUniqueWithoutEvolvedSpeciesInput", {})
export class PokemonEvolutionUpsertWithWhereUniqueWithoutEvolvedSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonEvolutionWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEvolutionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateWithoutEvolvedSpeciesInput, {
    nullable: false
  })
  update!: PokemonEvolutionUpdateWithoutEvolvedSpeciesInput;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateWithoutEvolvedSpeciesInput, {
    nullable: false
  })
  create!: PokemonEvolutionCreateWithoutEvolvedSpeciesInput;
}
