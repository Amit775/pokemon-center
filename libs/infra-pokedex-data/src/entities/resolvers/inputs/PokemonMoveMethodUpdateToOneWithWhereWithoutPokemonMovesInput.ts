import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveMethodUpdateWithoutPokemonMovesInput } from "../inputs/PokemonMoveMethodUpdateWithoutPokemonMovesInput";
import { PokemonMoveMethodWhereInput } from "../inputs/PokemonMoveMethodWhereInput";

@TypeGraphQL.InputType("PokemonMoveMethodUpdateToOneWithWhereWithoutPokemonMovesInput", {})
export class PokemonMoveMethodUpdateToOneWithWhereWithoutPokemonMovesInput {
  @TypeGraphQL.Field(_type => PokemonMoveMethodWhereInput, {
    nullable: true
  })
  where?: PokemonMoveMethodWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodUpdateWithoutPokemonMovesInput, {
    nullable: false
  })
  data!: PokemonMoveMethodUpdateWithoutPokemonMovesInput;
}
