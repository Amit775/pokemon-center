import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexesWhereInput } from "../inputs/PokedexesWhereInput";

@TypeGraphQL.InputType("PokedexesListRelationFilter", {})
export class PokedexesListRelationFilter {
  @TypeGraphQL.Field(_type => PokedexesWhereInput, {
    nullable: true
  })
  every?: PokedexesWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokedexesWhereInput, {
    nullable: true
  })
  some?: PokedexesWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokedexesWhereInput, {
    nullable: true
  })
  none?: PokedexesWhereInput | undefined;
}
