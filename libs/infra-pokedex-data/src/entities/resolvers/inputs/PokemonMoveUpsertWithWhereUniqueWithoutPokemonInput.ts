import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveCreateWithoutPokemonInput } from "../inputs/PokemonMoveCreateWithoutPokemonInput";
import { PokemonMoveUpdateWithoutPokemonInput } from "../inputs/PokemonMoveUpdateWithoutPokemonInput";
import { PokemonMoveWhereUniqueInput } from "../inputs/PokemonMoveWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMoveUpsertWithWhereUniqueWithoutPokemonInput", {})
export class PokemonMoveUpsertWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonMoveWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMoveWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonMoveUpdateWithoutPokemonInput, {
    nullable: false
  })
  update!: PokemonMoveUpdateWithoutPokemonInput;

  @TypeGraphQL.Field(_type => PokemonMoveCreateWithoutPokemonInput, {
    nullable: false
  })
  create!: PokemonMoveCreateWithoutPokemonInput;
}
