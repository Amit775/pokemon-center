import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemWhereInput } from "../inputs/ItemWhereInput";

@TypeGraphQL.InputType("ItemListRelationFilter", {})
export class ItemListRelationFilter {
  @TypeGraphQL.Field(_type => ItemWhereInput, {
    nullable: true
  })
  every?: ItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemWhereInput, {
    nullable: true
  })
  some?: ItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemWhereInput, {
    nullable: true
  })
  none?: ItemWhereInput | undefined;
}
