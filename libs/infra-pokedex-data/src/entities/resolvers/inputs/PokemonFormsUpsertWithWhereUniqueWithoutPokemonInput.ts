import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormsCreateWithoutPokemonInput } from "../inputs/PokemonFormsCreateWithoutPokemonInput";
import { PokemonFormsUpdateWithoutPokemonInput } from "../inputs/PokemonFormsUpdateWithoutPokemonInput";
import { PokemonFormsWhereUniqueInput } from "../inputs/PokemonFormsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormsUpsertWithWhereUniqueWithoutPokemonInput", {})
export class PokemonFormsUpsertWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonFormsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormsUpdateWithoutPokemonInput, {
    nullable: false
  })
  update!: PokemonFormsUpdateWithoutPokemonInput;

  @TypeGraphQL.Field(_type => PokemonFormsCreateWithoutPokemonInput, {
    nullable: false
  })
  create!: PokemonFormsCreateWithoutPokemonInput;
}
