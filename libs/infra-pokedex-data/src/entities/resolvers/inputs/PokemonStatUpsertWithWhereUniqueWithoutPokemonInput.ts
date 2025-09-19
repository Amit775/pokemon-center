import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonStatCreateWithoutPokemonInput } from "../inputs/PokemonStatCreateWithoutPokemonInput";
import { PokemonStatUpdateWithoutPokemonInput } from "../inputs/PokemonStatUpdateWithoutPokemonInput";
import { PokemonStatWhereUniqueInput } from "../inputs/PokemonStatWhereUniqueInput";

@TypeGraphQL.InputType("PokemonStatUpsertWithWhereUniqueWithoutPokemonInput", {})
export class PokemonStatUpsertWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonStatWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonStatWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonStatUpdateWithoutPokemonInput, {
    nullable: false
  })
  update!: PokemonStatUpdateWithoutPokemonInput;

  @TypeGraphQL.Field(_type => PokemonStatCreateWithoutPokemonInput, {
    nullable: false
  })
  create!: PokemonStatCreateWithoutPokemonInput;
}
