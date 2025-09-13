import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonTypesCreateWithoutPokemonInput } from "../inputs/PokemonTypesCreateWithoutPokemonInput";
import { PokemonTypesUpdateWithoutPokemonInput } from "../inputs/PokemonTypesUpdateWithoutPokemonInput";
import { PokemonTypesWhereUniqueInput } from "../inputs/PokemonTypesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonTypesUpsertWithWhereUniqueWithoutPokemonInput", {})
export class PokemonTypesUpsertWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonTypesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonTypesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonTypesUpdateWithoutPokemonInput, {
    nullable: false
  })
  update!: PokemonTypesUpdateWithoutPokemonInput;

  @TypeGraphQL.Field(_type => PokemonTypesCreateWithoutPokemonInput, {
    nullable: false
  })
  create!: PokemonTypesCreateWithoutPokemonInput;
}
