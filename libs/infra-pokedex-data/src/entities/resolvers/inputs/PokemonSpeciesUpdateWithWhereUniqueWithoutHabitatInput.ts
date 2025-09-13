import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesUpdateWithoutHabitatInput } from "../inputs/PokemonSpeciesUpdateWithoutHabitatInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesUpdateWithWhereUniqueWithoutHabitatInput", {})
export class PokemonSpeciesUpdateWithWhereUniqueWithoutHabitatInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonSpeciesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateWithoutHabitatInput, {
    nullable: false
  })
  data!: PokemonSpeciesUpdateWithoutHabitatInput;
}
