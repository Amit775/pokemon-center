import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormGenerationsUpdateWithoutPokemonFormInput } from "../inputs/PokemonFormGenerationsUpdateWithoutPokemonFormInput";
import { PokemonFormGenerationsWhereUniqueInput } from "../inputs/PokemonFormGenerationsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormGenerationsUpdateWithWhereUniqueWithoutPokemonFormInput", {})
export class PokemonFormGenerationsUpdateWithWhereUniqueWithoutPokemonFormInput {
  @TypeGraphQL.Field(_type => PokemonFormGenerationsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormGenerationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsUpdateWithoutPokemonFormInput, {
    nullable: false
  })
  data!: PokemonFormGenerationsUpdateWithoutPokemonFormInput;
}
