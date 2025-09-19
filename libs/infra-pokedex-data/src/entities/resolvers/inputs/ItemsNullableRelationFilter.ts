import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemWhereInput } from "../inputs/ItemWhereInput";

@TypeGraphQL.InputType("ItemsNullableRelationFilter", {})
export class ItemsNullableRelationFilter {
  @TypeGraphQL.Field(_type => ItemWhereInput, {
    nullable: true
  })
  is?: ItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemWhereInput, {
    nullable: true
  })
  isNot?: ItemWhereInput | undefined;
}
