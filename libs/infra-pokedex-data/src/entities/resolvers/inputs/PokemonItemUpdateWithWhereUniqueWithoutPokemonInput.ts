import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemUpdateWithoutPokemonInput } from "../inputs/PokemonItemUpdateWithoutPokemonInput";
import { PokemonItemWhereUniqueInput } from "../inputs/PokemonItemWhereUniqueInput";

@TypeGraphQL.InputType("PokemonItemUpdateWithWhereUniqueWithoutPokemonInput", {})
export class PokemonItemUpdateWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonItemWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonItemUpdateWithoutPokemonInput, {
    nullable: false
  })
  data!: PokemonItemUpdateWithoutPokemonInput;
}
