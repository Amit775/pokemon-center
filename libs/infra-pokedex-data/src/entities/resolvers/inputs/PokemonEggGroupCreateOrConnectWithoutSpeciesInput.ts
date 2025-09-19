import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEggGroupCreateWithoutSpeciesInput } from "../inputs/PokemonEggGroupCreateWithoutSpeciesInput";
import { PokemonEggGroupWhereUniqueInput } from "../inputs/PokemonEggGroupWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEggGroupCreateOrConnectWithoutSpeciesInput", {})
export class PokemonEggGroupCreateOrConnectWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonEggGroupWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEggGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonEggGroupCreateWithoutSpeciesInput, {
    nullable: false
  })
  create!: PokemonEggGroupCreateWithoutSpeciesInput;
}
