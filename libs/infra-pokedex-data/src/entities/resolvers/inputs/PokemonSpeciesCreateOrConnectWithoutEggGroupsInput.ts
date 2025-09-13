import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateWithoutEggGroupsInput } from "../inputs/PokemonSpeciesCreateWithoutEggGroupsInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesCreateOrConnectWithoutEggGroupsInput", {})
export class PokemonSpeciesCreateOrConnectWithoutEggGroupsInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonSpeciesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateWithoutEggGroupsInput, {
    nullable: false
  })
  create!: PokemonSpeciesCreateWithoutEggGroupsInput;
}
