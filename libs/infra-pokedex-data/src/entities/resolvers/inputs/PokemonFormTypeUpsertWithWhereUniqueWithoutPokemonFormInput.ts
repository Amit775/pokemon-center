import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormTypeCreateWithoutPokemonFormInput } from "../inputs/PokemonFormTypeCreateWithoutPokemonFormInput";
import { PokemonFormTypeUpdateWithoutPokemonFormInput } from "../inputs/PokemonFormTypeUpdateWithoutPokemonFormInput";
import { PokemonFormTypeWhereUniqueInput } from "../inputs/PokemonFormTypeWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormTypeUpsertWithWhereUniqueWithoutPokemonFormInput", {})
export class PokemonFormTypeUpsertWithWhereUniqueWithoutPokemonFormInput {
  @TypeGraphQL.Field(_type => PokemonFormTypeWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormTypeUpdateWithoutPokemonFormInput, {
    nullable: false
  })
  update!: PokemonFormTypeUpdateWithoutPokemonFormInput;

  @TypeGraphQL.Field(_type => PokemonFormTypeCreateWithoutPokemonFormInput, {
    nullable: false
  })
  create!: PokemonFormTypeCreateWithoutPokemonFormInput;
}
