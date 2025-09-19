import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagWhereInput } from "../inputs/ItemFlagWhereInput";

@TypeGraphQL.InputType("ItemFlagRelationFilter", {})
export class ItemFlagRelationFilter {
  @TypeGraphQL.Field(_type => ItemFlagWhereInput, {
    nullable: true
  })
  is?: ItemFlagWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagWhereInput, {
    nullable: true
  })
  isNot?: ItemFlagWhereInput | undefined;
}
