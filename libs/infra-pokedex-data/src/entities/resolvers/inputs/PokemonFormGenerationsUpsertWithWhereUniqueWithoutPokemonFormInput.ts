import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormGenerationsCreateWithoutPokemonFormInput } from "../inputs/PokemonFormGenerationsCreateWithoutPokemonFormInput";
import { PokemonFormGenerationsUpdateWithoutPokemonFormInput } from "../inputs/PokemonFormGenerationsUpdateWithoutPokemonFormInput";
import { PokemonFormGenerationsWhereUniqueInput } from "../inputs/PokemonFormGenerationsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormGenerationsUpsertWithWhereUniqueWithoutPokemonFormInput", {})
export class PokemonFormGenerationsUpsertWithWhereUniqueWithoutPokemonFormInput {
  @TypeGraphQL.Field(_type => PokemonFormGenerationsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormGenerationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsUpdateWithoutPokemonFormInput, {
    nullable: false
  })
  update!: PokemonFormGenerationsUpdateWithoutPokemonFormInput;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsCreateWithoutPokemonFormInput, {
    nullable: false
  })
  create!: PokemonFormGenerationsCreateWithoutPokemonFormInput;
}
