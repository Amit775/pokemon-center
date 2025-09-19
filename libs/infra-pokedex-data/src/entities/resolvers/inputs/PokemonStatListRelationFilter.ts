import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonStatWhereInput } from "../inputs/PokemonStatWhereInput";

@TypeGraphQL.InputType("PokemonStatListRelationFilter", {})
export class PokemonStatListRelationFilter {
  @TypeGraphQL.Field(_type => PokemonStatWhereInput, {
    nullable: true
  })
  every?: PokemonStatWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonStatWhereInput, {
    nullable: true
  })
  some?: PokemonStatWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonStatWhereInput, {
    nullable: true
  })
  none?: PokemonStatWhereInput | undefined;
}
