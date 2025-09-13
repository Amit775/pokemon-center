import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateWithoutColorInput } from "../inputs/PokemonSpeciesCreateWithoutColorInput";
import { PokemonSpeciesUpdateWithoutColorInput } from "../inputs/PokemonSpeciesUpdateWithoutColorInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesUpsertWithWhereUniqueWithoutColorInput", {})
export class PokemonSpeciesUpsertWithWhereUniqueWithoutColorInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonSpeciesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateWithoutColorInput, {
    nullable: false
  })
  update!: PokemonSpeciesUpdateWithoutColorInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateWithoutColorInput, {
    nullable: false
  })
  create!: PokemonSpeciesCreateWithoutColorInput;
}
