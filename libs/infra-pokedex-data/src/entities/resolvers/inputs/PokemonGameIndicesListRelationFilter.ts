import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonGameIndicesWhereInput } from "../inputs/PokemonGameIndicesWhereInput";

@TypeGraphQL.InputType("PokemonGameIndicesListRelationFilter", {})
export class PokemonGameIndicesListRelationFilter {
  @TypeGraphQL.Field(_type => PokemonGameIndicesWhereInput, {
    nullable: true
  })
  every?: PokemonGameIndicesWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndicesWhereInput, {
    nullable: true
  })
  some?: PokemonGameIndicesWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndicesWhereInput, {
    nullable: true
  })
  none?: PokemonGameIndicesWhereInput | undefined;
}
