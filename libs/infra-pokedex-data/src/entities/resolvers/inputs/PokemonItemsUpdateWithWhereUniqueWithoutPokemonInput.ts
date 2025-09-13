import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemsUpdateWithoutPokemonInput } from "../inputs/PokemonItemsUpdateWithoutPokemonInput";
import { PokemonItemsWhereUniqueInput } from "../inputs/PokemonItemsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonItemsUpdateWithWhereUniqueWithoutPokemonInput", {})
export class PokemonItemsUpdateWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonItemsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonItemsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonItemsUpdateWithoutPokemonInput, {
    nullable: false
  })
  data!: PokemonItemsUpdateWithoutPokemonInput;
}
