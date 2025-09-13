import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonDexNumbersWhereInput } from "../inputs/PokemonDexNumbersWhereInput";

@TypeGraphQL.InputType("PokemonDexNumbersListRelationFilter", {})
export class PokemonDexNumbersListRelationFilter {
  @TypeGraphQL.Field(_type => PokemonDexNumbersWhereInput, {
    nullable: true
  })
  every?: PokemonDexNumbersWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonDexNumbersWhereInput, {
    nullable: true
  })
  some?: PokemonDexNumbersWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonDexNumbersWhereInput, {
    nullable: true
  })
  none?: PokemonDexNumbersWhereInput | undefined;
}
