import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormTypesCreateWithoutPokemonFormInput } from "../inputs/PokemonFormTypesCreateWithoutPokemonFormInput";
import { PokemonFormTypesUpdateWithoutPokemonFormInput } from "../inputs/PokemonFormTypesUpdateWithoutPokemonFormInput";
import { PokemonFormTypesWhereUniqueInput } from "../inputs/PokemonFormTypesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormTypesUpsertWithWhereUniqueWithoutPokemonFormInput", {})
export class PokemonFormTypesUpsertWithWhereUniqueWithoutPokemonFormInput {
  @TypeGraphQL.Field(_type => PokemonFormTypesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormTypesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormTypesUpdateWithoutPokemonFormInput, {
    nullable: false
  })
  update!: PokemonFormTypesUpdateWithoutPokemonFormInput;

  @TypeGraphQL.Field(_type => PokemonFormTypesCreateWithoutPokemonFormInput, {
    nullable: false
  })
  create!: PokemonFormTypesCreateWithoutPokemonFormInput;
}
