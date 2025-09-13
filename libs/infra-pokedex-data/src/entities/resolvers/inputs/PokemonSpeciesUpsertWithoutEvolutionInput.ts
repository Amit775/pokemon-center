import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateWithoutEvolutionInput } from "../inputs/PokemonSpeciesCreateWithoutEvolutionInput";
import { PokemonSpeciesUpdateWithoutEvolutionInput } from "../inputs/PokemonSpeciesUpdateWithoutEvolutionInput";
import { PokemonSpeciesWhereInput } from "../inputs/PokemonSpeciesWhereInput";

@TypeGraphQL.InputType("PokemonSpeciesUpsertWithoutEvolutionInput", {})
export class PokemonSpeciesUpsertWithoutEvolutionInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateWithoutEvolutionInput, {
    nullable: false
  })
  update!: PokemonSpeciesUpdateWithoutEvolutionInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateWithoutEvolutionInput, {
    nullable: false
  })
  create!: PokemonSpeciesCreateWithoutEvolutionInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesWhereInput, {
    nullable: true
  })
  where?: PokemonSpeciesWhereInput | undefined;
}
