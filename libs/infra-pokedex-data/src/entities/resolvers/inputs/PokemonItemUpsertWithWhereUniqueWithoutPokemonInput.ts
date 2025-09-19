import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemCreateWithoutPokemonInput } from "../inputs/PokemonItemCreateWithoutPokemonInput";
import { PokemonItemUpdateWithoutPokemonInput } from "../inputs/PokemonItemUpdateWithoutPokemonInput";
import { PokemonItemWhereUniqueInput } from "../inputs/PokemonItemWhereUniqueInput";

@TypeGraphQL.InputType("PokemonItemUpsertWithWhereUniqueWithoutPokemonInput", {})
export class PokemonItemUpsertWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonItemWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonItemUpdateWithoutPokemonInput, {
    nullable: false
  })
  update!: PokemonItemUpdateWithoutPokemonInput;

  @TypeGraphQL.Field(_type => PokemonItemCreateWithoutPokemonInput, {
    nullable: false
  })
  create!: PokemonItemCreateWithoutPokemonInput;
}
