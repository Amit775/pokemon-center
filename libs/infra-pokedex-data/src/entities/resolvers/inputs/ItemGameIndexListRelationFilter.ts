import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemGameIndexWhereInput } from "../inputs/ItemGameIndexWhereInput";

@TypeGraphQL.InputType("ItemGameIndexListRelationFilter", {})
export class ItemGameIndexListRelationFilter {
  @TypeGraphQL.Field(_type => ItemGameIndexWhereInput, {
    nullable: true
  })
  every?: ItemGameIndexWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndexWhereInput, {
    nullable: true
  })
  some?: ItemGameIndexWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndexWhereInput, {
    nullable: true
  })
  none?: ItemGameIndexWhereInput | undefined;
}
