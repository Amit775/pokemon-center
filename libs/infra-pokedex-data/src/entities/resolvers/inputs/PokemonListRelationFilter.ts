import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonWhereInput } from "../inputs/PokemonWhereInput";

@TypeGraphQL.InputType("PokemonListRelationFilter", {})
export class PokemonListRelationFilter {
  @TypeGraphQL.Field(_type => PokemonWhereInput, {
    nullable: true
  })
  every?: PokemonWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonWhereInput, {
    nullable: true
  })
  some?: PokemonWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonWhereInput, {
    nullable: true
  })
  none?: PokemonWhereInput | undefined;
}
