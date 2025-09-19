import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonDexNumberWhereInput } from "../inputs/PokemonDexNumberWhereInput";

@TypeGraphQL.InputType("PokemonDexNumberListRelationFilter", {})
export class PokemonDexNumberListRelationFilter {
  @TypeGraphQL.Field(_type => PokemonDexNumberWhereInput, {
    nullable: true
  })
  every?: PokemonDexNumberWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonDexNumberWhereInput, {
    nullable: true
  })
  some?: PokemonDexNumberWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonDexNumberWhereInput, {
    nullable: true
  })
  none?: PokemonDexNumberWhereInput | undefined;
}
