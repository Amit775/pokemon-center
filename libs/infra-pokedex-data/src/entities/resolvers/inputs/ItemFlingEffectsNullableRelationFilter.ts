import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlingEffectsWhereInput } from "../inputs/ItemFlingEffectsWhereInput";

@TypeGraphQL.InputType("ItemFlingEffectsNullableRelationFilter", {})
export class ItemFlingEffectsNullableRelationFilter {
  @TypeGraphQL.Field(_type => ItemFlingEffectsWhereInput, {
    nullable: true
  })
  is?: ItemFlingEffectsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectsWhereInput, {
    nullable: true
  })
  isNot?: ItemFlingEffectsWhereInput | undefined;
}
