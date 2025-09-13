import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateWithoutHabitatInput } from "../inputs/PokemonSpeciesCreateWithoutHabitatInput";
import { PokemonSpeciesUpdateWithoutHabitatInput } from "../inputs/PokemonSpeciesUpdateWithoutHabitatInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesUpsertWithWhereUniqueWithoutHabitatInput", {})
export class PokemonSpeciesUpsertWithWhereUniqueWithoutHabitatInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonSpeciesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateWithoutHabitatInput, {
    nullable: false
  })
  update!: PokemonSpeciesUpdateWithoutHabitatInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateWithoutHabitatInput, {
    nullable: false
  })
  create!: PokemonSpeciesCreateWithoutHabitatInput;
}
