import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateWithoutEvolvesFromInput } from "../inputs/PokemonSpeciesCreateWithoutEvolvesFromInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesCreateOrConnectWithoutEvolvesFromInput", {})
export class PokemonSpeciesCreateOrConnectWithoutEvolvesFromInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonSpeciesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateWithoutEvolvesFromInput, {
    nullable: false
  })
  create!: PokemonSpeciesCreateWithoutEvolvesFromInput;
}
