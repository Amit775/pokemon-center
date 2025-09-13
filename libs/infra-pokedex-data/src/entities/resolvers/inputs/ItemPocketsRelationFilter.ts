import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemPocketsWhereInput } from "../inputs/ItemPocketsWhereInput";

@TypeGraphQL.InputType("ItemPocketsRelationFilter", {})
export class ItemPocketsRelationFilter {
  @TypeGraphQL.Field(_type => ItemPocketsWhereInput, {
    nullable: true
  })
  is?: ItemPocketsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemPocketsWhereInput, {
    nullable: true
  })
  isNot?: ItemPocketsWhereInput | undefined;
}
