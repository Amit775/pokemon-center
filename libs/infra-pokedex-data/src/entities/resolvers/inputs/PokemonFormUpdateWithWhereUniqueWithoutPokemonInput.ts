import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormUpdateWithoutPokemonInput } from "../inputs/PokemonFormUpdateWithoutPokemonInput";
import { PokemonFormWhereUniqueInput } from "../inputs/PokemonFormWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormUpdateWithWhereUniqueWithoutPokemonInput", {})
export class PokemonFormUpdateWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonFormWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormUpdateWithoutPokemonInput, {
    nullable: false
  })
  data!: PokemonFormUpdateWithoutPokemonInput;
}
