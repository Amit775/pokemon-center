import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonGameIndexWhereInput } from "../inputs/PokemonGameIndexWhereInput";

@TypeGraphQL.InputType("PokemonGameIndexListRelationFilter", {})
export class PokemonGameIndexListRelationFilter {
  @TypeGraphQL.Field(_type => PokemonGameIndexWhereInput, {
    nullable: true
  })
  every?: PokemonGameIndexWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndexWhereInput, {
    nullable: true
  })
  some?: PokemonGameIndexWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndexWhereInput, {
    nullable: true
  })
  none?: PokemonGameIndexWhereInput | undefined;
}
