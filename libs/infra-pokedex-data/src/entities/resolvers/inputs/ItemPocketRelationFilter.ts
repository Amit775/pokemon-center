import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemPocketWhereInput } from "../inputs/ItemPocketWhereInput";

@TypeGraphQL.InputType("ItemPocketRelationFilter", {})
export class ItemPocketRelationFilter {
  @TypeGraphQL.Field(_type => ItemPocketWhereInput, {
    nullable: true
  })
  is?: ItemPocketWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemPocketWhereInput, {
    nullable: true
  })
  isNot?: ItemPocketWhereInput | undefined;
}
