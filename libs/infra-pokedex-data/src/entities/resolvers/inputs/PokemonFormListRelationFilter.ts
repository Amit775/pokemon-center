import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormWhereInput } from "../inputs/PokemonFormWhereInput";

@TypeGraphQL.InputType("PokemonFormListRelationFilter", {})
export class PokemonFormListRelationFilter {
  @TypeGraphQL.Field(_type => PokemonFormWhereInput, {
    nullable: true
  })
  every?: PokemonFormWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormWhereInput, {
    nullable: true
  })
  some?: PokemonFormWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormWhereInput, {
    nullable: true
  })
  none?: PokemonFormWhereInput | undefined;
}
