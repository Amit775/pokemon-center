import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateWithoutGenerationInput } from "../inputs/PokemonSpeciesCreateWithoutGenerationInput";
import { PokemonSpeciesUpdateWithoutGenerationInput } from "../inputs/PokemonSpeciesUpdateWithoutGenerationInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesUpsertWithWhereUniqueWithoutGenerationInput", {})
export class PokemonSpeciesUpsertWithWhereUniqueWithoutGenerationInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonSpeciesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateWithoutGenerationInput, {
    nullable: false
  })
  update!: PokemonSpeciesUpdateWithoutGenerationInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateWithoutGenerationInput, {
    nullable: false
  })
  create!: PokemonSpeciesCreateWithoutGenerationInput;
}
