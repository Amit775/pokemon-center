import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsWhereInput } from "../inputs/ItemsWhereInput";

@TypeGraphQL.InputType("ItemsListRelationFilter", {})
export class ItemsListRelationFilter {
  @TypeGraphQL.Field(_type => ItemsWhereInput, {
    nullable: true
  })
  every?: ItemsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemsWhereInput, {
    nullable: true
  })
  some?: ItemsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemsWhereInput, {
    nullable: true
  })
  none?: ItemsWhereInput | undefined;
}
