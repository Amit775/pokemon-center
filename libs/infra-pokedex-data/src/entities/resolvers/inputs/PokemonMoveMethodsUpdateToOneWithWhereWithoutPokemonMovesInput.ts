import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveMethodsUpdateWithoutPokemonMovesInput } from "../inputs/PokemonMoveMethodsUpdateWithoutPokemonMovesInput";
import { PokemonMoveMethodsWhereInput } from "../inputs/PokemonMoveMethodsWhereInput";

@TypeGraphQL.InputType("PokemonMoveMethodsUpdateToOneWithWhereWithoutPokemonMovesInput", {})
export class PokemonMoveMethodsUpdateToOneWithWhereWithoutPokemonMovesInput {
  @TypeGraphQL.Field(_type => PokemonMoveMethodsWhereInput, {
    nullable: true
  })
  where?: PokemonMoveMethodsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsUpdateWithoutPokemonMovesInput, {
    nullable: false
  })
  data!: PokemonMoveMethodsUpdateWithoutPokemonMovesInput;
}
