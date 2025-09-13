import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonTypesWhereInput } from "../inputs/PokemonTypesWhereInput";

@TypeGraphQL.InputType("PokemonTypesListRelationFilter", {})
export class PokemonTypesListRelationFilter {
  @TypeGraphQL.Field(_type => PokemonTypesWhereInput, {
    nullable: true
  })
  every?: PokemonTypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonTypesWhereInput, {
    nullable: true
  })
  some?: PokemonTypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonTypesWhereInput, {
    nullable: true
  })
  none?: PokemonTypesWhereInput | undefined;
}
