import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMovesUpdateWithoutMoveInput } from "../inputs/PokemonMovesUpdateWithoutMoveInput";
import { PokemonMovesWhereUniqueInput } from "../inputs/PokemonMovesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMovesUpdateWithWhereUniqueWithoutMoveInput", {})
export class PokemonMovesUpdateWithWhereUniqueWithoutMoveInput {
  @TypeGraphQL.Field(_type => PokemonMovesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMovesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonMovesUpdateWithoutMoveInput, {
    nullable: false
  })
  data!: PokemonMovesUpdateWithoutMoveInput;
}
