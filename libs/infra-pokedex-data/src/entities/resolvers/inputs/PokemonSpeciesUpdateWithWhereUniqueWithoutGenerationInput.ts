import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesUpdateWithoutGenerationInput } from "../inputs/PokemonSpeciesUpdateWithoutGenerationInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesUpdateWithWhereUniqueWithoutGenerationInput", {})
export class PokemonSpeciesUpdateWithWhereUniqueWithoutGenerationInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonSpeciesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateWithoutGenerationInput, {
    nullable: false
  })
  data!: PokemonSpeciesUpdateWithoutGenerationInput;
}
