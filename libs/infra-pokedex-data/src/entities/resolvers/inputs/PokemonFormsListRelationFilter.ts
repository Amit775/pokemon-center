import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormsWhereInput } from "../inputs/PokemonFormsWhereInput";

@TypeGraphQL.InputType("PokemonFormsListRelationFilter", {})
export class PokemonFormsListRelationFilter {
  @TypeGraphQL.Field(_type => PokemonFormsWhereInput, {
    nullable: true
  })
  every?: PokemonFormsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormsWhereInput, {
    nullable: true
  })
  some?: PokemonFormsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormsWhereInput, {
    nullable: true
  })
  none?: PokemonFormsWhereInput | undefined;
}
