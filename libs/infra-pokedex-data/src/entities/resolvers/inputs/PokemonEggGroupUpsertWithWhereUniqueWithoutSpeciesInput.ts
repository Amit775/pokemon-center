import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEggGroupCreateWithoutSpeciesInput } from "../inputs/PokemonEggGroupCreateWithoutSpeciesInput";
import { PokemonEggGroupUpdateWithoutSpeciesInput } from "../inputs/PokemonEggGroupUpdateWithoutSpeciesInput";
import { PokemonEggGroupWhereUniqueInput } from "../inputs/PokemonEggGroupWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEggGroupUpsertWithWhereUniqueWithoutSpeciesInput", {})
export class PokemonEggGroupUpsertWithWhereUniqueWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonEggGroupWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEggGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonEggGroupUpdateWithoutSpeciesInput, {
    nullable: false
  })
  update!: PokemonEggGroupUpdateWithoutSpeciesInput;

  @TypeGraphQL.Field(_type => PokemonEggGroupCreateWithoutSpeciesInput, {
    nullable: false
  })
  create!: PokemonEggGroupCreateWithoutSpeciesInput;
}
