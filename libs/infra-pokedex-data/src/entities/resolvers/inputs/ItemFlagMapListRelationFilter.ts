import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagMapWhereInput } from "../inputs/ItemFlagMapWhereInput";

@TypeGraphQL.InputType("ItemFlagMapListRelationFilter", {})
export class ItemFlagMapListRelationFilter {
  @TypeGraphQL.Field(_type => ItemFlagMapWhereInput, {
    nullable: true
  })
  every?: ItemFlagMapWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagMapWhereInput, {
    nullable: true
  })
  some?: ItemFlagMapWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagMapWhereInput, {
    nullable: true
  })
  none?: ItemFlagMapWhereInput | undefined;
}
