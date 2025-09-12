import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesUpdateWithoutColorInput } from "../inputs/PokemonSpeciesUpdateWithoutColorInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesUpdateWithWhereUniqueWithoutColorInput", {})
export class PokemonSpeciesUpdateWithWhereUniqueWithoutColorInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonSpeciesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateWithoutColorInput, {
    nullable: false
  })
  data!: PokemonSpeciesUpdateWithoutColorInput;
}
