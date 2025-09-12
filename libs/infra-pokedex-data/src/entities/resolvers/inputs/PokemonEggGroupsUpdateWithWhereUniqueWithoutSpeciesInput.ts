import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEggGroupsUpdateWithoutSpeciesInput } from "../inputs/PokemonEggGroupsUpdateWithoutSpeciesInput";
import { PokemonEggGroupsWhereUniqueInput } from "../inputs/PokemonEggGroupsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEggGroupsUpdateWithWhereUniqueWithoutSpeciesInput", {})
export class PokemonEggGroupsUpdateWithWhereUniqueWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonEggGroupsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEggGroupsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonEggGroupsUpdateWithoutSpeciesInput, {
    nullable: false
  })
  data!: PokemonEggGroupsUpdateWithoutSpeciesInput;
}
