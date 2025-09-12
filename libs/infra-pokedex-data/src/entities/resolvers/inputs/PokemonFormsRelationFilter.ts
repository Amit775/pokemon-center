import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormsWhereInput } from "../inputs/PokemonFormsWhereInput";

@TypeGraphQL.InputType("PokemonFormsRelationFilter", {})
export class PokemonFormsRelationFilter {
  @TypeGraphQL.Field(_type => PokemonFormsWhereInput, {
    nullable: true
  })
  is?: PokemonFormsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormsWhereInput, {
    nullable: true
  })
  isNot?: PokemonFormsWhereInput | undefined;
}
