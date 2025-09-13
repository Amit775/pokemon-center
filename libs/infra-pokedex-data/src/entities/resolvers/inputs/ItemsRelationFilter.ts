import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsWhereInput } from "../inputs/ItemsWhereInput";

@TypeGraphQL.InputType("ItemsRelationFilter", {})
export class ItemsRelationFilter {
  @TypeGraphQL.Field(_type => ItemsWhereInput, {
    nullable: true
  })
  is?: ItemsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemsWhereInput, {
    nullable: true
  })
  isNot?: ItemsWhereInput | undefined;
}
