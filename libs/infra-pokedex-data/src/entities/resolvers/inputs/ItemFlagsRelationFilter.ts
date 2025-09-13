import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagsWhereInput } from "../inputs/ItemFlagsWhereInput";

@TypeGraphQL.InputType("ItemFlagsRelationFilter", {})
export class ItemFlagsRelationFilter {
  @TypeGraphQL.Field(_type => ItemFlagsWhereInput, {
    nullable: true
  })
  is?: ItemFlagsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagsWhereInput, {
    nullable: true
  })
  isNot?: ItemFlagsWhereInput | undefined;
}
