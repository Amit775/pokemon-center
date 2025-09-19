import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateNestedOneWithoutEggGroupsInput } from "../inputs/PokemonSpeciesCreateNestedOneWithoutEggGroupsInput";

@TypeGraphQL.InputType("PokemonEggGroupCreateWithoutEggGroupInput", {})
export class PokemonEggGroupCreateWithoutEggGroupInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesCreateNestedOneWithoutEggGroupsInput, {
    nullable: false
  })
  species!: PokemonSpeciesCreateNestedOneWithoutEggGroupsInput;
}
