import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormsUpdateWithoutPokemonInput } from "../inputs/PokemonFormsUpdateWithoutPokemonInput";
import { PokemonFormsWhereUniqueInput } from "../inputs/PokemonFormsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormsUpdateWithWhereUniqueWithoutPokemonInput", {})
export class PokemonFormsUpdateWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonFormsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormsUpdateWithoutPokemonInput, {
    nullable: false
  })
  data!: PokemonFormsUpdateWithoutPokemonInput;
}
