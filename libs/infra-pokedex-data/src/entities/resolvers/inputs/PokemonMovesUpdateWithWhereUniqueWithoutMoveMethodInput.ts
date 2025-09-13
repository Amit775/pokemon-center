import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMovesUpdateWithoutMoveMethodInput } from "../inputs/PokemonMovesUpdateWithoutMoveMethodInput";
import { PokemonMovesWhereUniqueInput } from "../inputs/PokemonMovesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMovesUpdateWithWhereUniqueWithoutMoveMethodInput", {})
export class PokemonMovesUpdateWithWhereUniqueWithoutMoveMethodInput {
  @TypeGraphQL.Field(_type => PokemonMovesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMovesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonMovesUpdateWithoutMoveMethodInput, {
    nullable: false
  })
  data!: PokemonMovesUpdateWithoutMoveMethodInput;
}
