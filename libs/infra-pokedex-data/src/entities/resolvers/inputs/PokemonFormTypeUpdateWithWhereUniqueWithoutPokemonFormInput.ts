import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormTypeUpdateWithoutPokemonFormInput } from "../inputs/PokemonFormTypeUpdateWithoutPokemonFormInput";
import { PokemonFormTypeWhereUniqueInput } from "../inputs/PokemonFormTypeWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormTypeUpdateWithWhereUniqueWithoutPokemonFormInput", {})
export class PokemonFormTypeUpdateWithWhereUniqueWithoutPokemonFormInput {
  @TypeGraphQL.Field(_type => PokemonFormTypeWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormTypeUpdateWithoutPokemonFormInput, {
    nullable: false
  })
  data!: PokemonFormTypeUpdateWithoutPokemonFormInput;
}
