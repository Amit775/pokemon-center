import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEggGroupsCreateWithoutSpeciesInput } from "../inputs/PokemonEggGroupsCreateWithoutSpeciesInput";
import { PokemonEggGroupsUpdateWithoutSpeciesInput } from "../inputs/PokemonEggGroupsUpdateWithoutSpeciesInput";
import { PokemonEggGroupsWhereUniqueInput } from "../inputs/PokemonEggGroupsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEggGroupsUpsertWithWhereUniqueWithoutSpeciesInput", {})
export class PokemonEggGroupsUpsertWithWhereUniqueWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonEggGroupsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEggGroupsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonEggGroupsUpdateWithoutSpeciesInput, {
    nullable: false
  })
  update!: PokemonEggGroupsUpdateWithoutSpeciesInput;

  @TypeGraphQL.Field(_type => PokemonEggGroupsCreateWithoutSpeciesInput, {
    nullable: false
  })
  create!: PokemonEggGroupsCreateWithoutSpeciesInput;
}
