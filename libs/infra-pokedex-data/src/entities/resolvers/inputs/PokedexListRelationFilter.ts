import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexWhereInput } from "../inputs/PokedexWhereInput";

@TypeGraphQL.InputType("PokedexListRelationFilter", {})
export class PokedexListRelationFilter {
  @TypeGraphQL.Field(_type => PokedexWhereInput, {
    nullable: true
  })
  every?: PokedexWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokedexWhereInput, {
    nullable: true
  })
  some?: PokedexWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokedexWhereInput, {
    nullable: true
  })
  none?: PokedexWhereInput | undefined;
}
