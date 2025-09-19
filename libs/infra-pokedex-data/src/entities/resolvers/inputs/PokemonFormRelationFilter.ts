import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormWhereInput } from "../inputs/PokemonFormWhereInput";

@TypeGraphQL.InputType("PokemonFormRelationFilter", {})
export class PokemonFormRelationFilter {
  @TypeGraphQL.Field(_type => PokemonFormWhereInput, {
    nullable: true
  })
  is?: PokemonFormWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormWhereInput, {
    nullable: true
  })
  isNot?: PokemonFormWhereInput | undefined;
}
