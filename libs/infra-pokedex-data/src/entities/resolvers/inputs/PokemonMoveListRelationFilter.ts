import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveWhereInput } from "../inputs/PokemonMoveWhereInput";

@TypeGraphQL.InputType("PokemonMoveListRelationFilter", {})
export class PokemonMoveListRelationFilter {
  @TypeGraphQL.Field(_type => PokemonMoveWhereInput, {
    nullable: true
  })
  every?: PokemonMoveWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveWhereInput, {
    nullable: true
  })
  some?: PokemonMoveWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveWhereInput, {
    nullable: true
  })
  none?: PokemonMoveWhereInput | undefined;
}
