import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormTypesWhereInput } from "../inputs/PokemonFormTypesWhereInput";

@TypeGraphQL.InputType("PokemonFormTypesListRelationFilter", {})
export class PokemonFormTypesListRelationFilter {
  @TypeGraphQL.Field(_type => PokemonFormTypesWhereInput, {
    nullable: true
  })
  every?: PokemonFormTypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypesWhereInput, {
    nullable: true
  })
  some?: PokemonFormTypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypesWhereInput, {
    nullable: true
  })
  none?: PokemonFormTypesWhereInput | undefined;
}
