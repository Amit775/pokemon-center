import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEggGroupUpdateWithoutSpeciesInput } from "../inputs/PokemonEggGroupUpdateWithoutSpeciesInput";
import { PokemonEggGroupWhereUniqueInput } from "../inputs/PokemonEggGroupWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEggGroupUpdateWithWhereUniqueWithoutSpeciesInput", {})
export class PokemonEggGroupUpdateWithWhereUniqueWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonEggGroupWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEggGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonEggGroupUpdateWithoutSpeciesInput, {
    nullable: false
  })
  data!: PokemonEggGroupUpdateWithoutSpeciesInput;
}
