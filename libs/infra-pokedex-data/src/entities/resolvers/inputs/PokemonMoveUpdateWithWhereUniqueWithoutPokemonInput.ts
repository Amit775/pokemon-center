import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveUpdateWithoutPokemonInput } from "../inputs/PokemonMoveUpdateWithoutPokemonInput";
import { PokemonMoveWhereUniqueInput } from "../inputs/PokemonMoveWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMoveUpdateWithWhereUniqueWithoutPokemonInput", {})
export class PokemonMoveUpdateWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonMoveWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMoveWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonMoveUpdateWithoutPokemonInput, {
    nullable: false
  })
  data!: PokemonMoveUpdateWithoutPokemonInput;
}
