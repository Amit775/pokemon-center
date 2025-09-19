import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonTypeWhereInput } from "../inputs/PokemonTypeWhereInput";

@TypeGraphQL.InputType("PokemonTypeListRelationFilter", {})
export class PokemonTypeListRelationFilter {
  @TypeGraphQL.Field(_type => PokemonTypeWhereInput, {
    nullable: true
  })
  every?: PokemonTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonTypeWhereInput, {
    nullable: true
  })
  some?: PokemonTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonTypeWhereInput, {
    nullable: true
  })
  none?: PokemonTypeWhereInput | undefined;
}
