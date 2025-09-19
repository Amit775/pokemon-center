import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesUpdateWithoutEvolvesFromInput } from "../inputs/PokemonSpeciesUpdateWithoutEvolvesFromInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesUpdateWithWhereUniqueWithoutEvolvesFromInput", {})
export class PokemonSpeciesUpdateWithWhereUniqueWithoutEvolvesFromInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonSpeciesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateWithoutEvolvesFromInput, {
    nullable: false
  })
  data!: PokemonSpeciesUpdateWithoutEvolvesFromInput;
}
