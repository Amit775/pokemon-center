import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonStatsWhereInput } from "../inputs/PokemonStatsWhereInput";

@TypeGraphQL.InputType("PokemonStatsListRelationFilter", {})
export class PokemonStatsListRelationFilter {
  @TypeGraphQL.Field(_type => PokemonStatsWhereInput, {
    nullable: true
  })
  every?: PokemonStatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonStatsWhereInput, {
    nullable: true
  })
  some?: PokemonStatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonStatsWhereInput, {
    nullable: true
  })
  none?: PokemonStatsWhereInput | undefined;
}
