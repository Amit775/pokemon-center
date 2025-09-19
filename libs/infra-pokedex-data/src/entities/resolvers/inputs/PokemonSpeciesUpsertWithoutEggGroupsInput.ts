import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateWithoutEggGroupsInput } from "../inputs/PokemonSpeciesCreateWithoutEggGroupsInput";
import { PokemonSpeciesUpdateWithoutEggGroupsInput } from "../inputs/PokemonSpeciesUpdateWithoutEggGroupsInput";
import { PokemonSpeciesWhereInput } from "../inputs/PokemonSpeciesWhereInput";

@TypeGraphQL.InputType("PokemonSpeciesUpsertWithoutEggGroupsInput", {})
export class PokemonSpeciesUpsertWithoutEggGroupsInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateWithoutEggGroupsInput, {
    nullable: false
  })
  update!: PokemonSpeciesUpdateWithoutEggGroupsInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateWithoutEggGroupsInput, {
    nullable: false
  })
  create!: PokemonSpeciesCreateWithoutEggGroupsInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesWhereInput, {
    nullable: true
  })
  where?: PokemonSpeciesWhereInput | undefined;
}
