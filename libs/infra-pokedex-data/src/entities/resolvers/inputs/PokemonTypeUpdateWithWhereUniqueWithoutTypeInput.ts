import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonTypeUpdateWithoutTypeInput } from "../inputs/PokemonTypeUpdateWithoutTypeInput";
import { PokemonTypeWhereUniqueInput } from "../inputs/PokemonTypeWhereUniqueInput";

@TypeGraphQL.InputType("PokemonTypeUpdateWithWhereUniqueWithoutTypeInput", {})
export class PokemonTypeUpdateWithWhereUniqueWithoutTypeInput {
  @TypeGraphQL.Field(_type => PokemonTypeWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonTypeUpdateWithoutTypeInput, {
    nullable: false
  })
  data!: PokemonTypeUpdateWithoutTypeInput;
}
