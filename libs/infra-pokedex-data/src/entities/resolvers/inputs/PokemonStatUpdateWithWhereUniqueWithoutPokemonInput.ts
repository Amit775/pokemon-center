import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonStatUpdateWithoutPokemonInput } from "../inputs/PokemonStatUpdateWithoutPokemonInput";
import { PokemonStatWhereUniqueInput } from "../inputs/PokemonStatWhereUniqueInput";

@TypeGraphQL.InputType("PokemonStatUpdateWithWhereUniqueWithoutPokemonInput", {})
export class PokemonStatUpdateWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonStatWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonStatWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonStatUpdateWithoutPokemonInput, {
    nullable: false
  })
  data!: PokemonStatUpdateWithoutPokemonInput;
}
