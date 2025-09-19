import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonHabitatCreateWithoutSpeciesInput } from "../inputs/PokemonHabitatCreateWithoutSpeciesInput";
import { PokemonHabitatWhereUniqueInput } from "../inputs/PokemonHabitatWhereUniqueInput";

@TypeGraphQL.InputType("PokemonHabitatCreateOrConnectWithoutSpeciesInput", {})
export class PokemonHabitatCreateOrConnectWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonHabitatWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonHabitatWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonHabitatCreateWithoutSpeciesInput, {
    nullable: false
  })
  create!: PokemonHabitatCreateWithoutSpeciesInput;
}
