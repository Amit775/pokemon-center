import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateWithoutEvolvesFromInput } from "../inputs/PokemonSpeciesCreateWithoutEvolvesFromInput";
import { PokemonSpeciesUpdateWithoutEvolvesFromInput } from "../inputs/PokemonSpeciesUpdateWithoutEvolvesFromInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesUpsertWithWhereUniqueWithoutEvolvesFromInput", {})
export class PokemonSpeciesUpsertWithWhereUniqueWithoutEvolvesFromInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonSpeciesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateWithoutEvolvesFromInput, {
    nullable: false
  })
  update!: PokemonSpeciesUpdateWithoutEvolvesFromInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateWithoutEvolvesFromInput, {
    nullable: false
  })
  create!: PokemonSpeciesCreateWithoutEvolvesFromInput;
}
