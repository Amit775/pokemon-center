import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMovesWhereInput } from "../inputs/PokemonMovesWhereInput";

@TypeGraphQL.InputType("PokemonMovesListRelationFilter", {})
export class PokemonMovesListRelationFilter {
  @TypeGraphQL.Field(_type => PokemonMovesWhereInput, {
    nullable: true
  })
  every?: PokemonMovesWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMovesWhereInput, {
    nullable: true
  })
  some?: PokemonMovesWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMovesWhereInput, {
    nullable: true
  })
  none?: PokemonMovesWhereInput | undefined;
}
