import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlingEffectWhereInput } from "../inputs/ItemFlingEffectWhereInput";

@TypeGraphQL.InputType("ItemFlingEffectsNullableRelationFilter", {})
export class ItemFlingEffectsNullableRelationFilter {
  @TypeGraphQL.Field(_type => ItemFlingEffectWhereInput, {
    nullable: true
  })
  is?: ItemFlingEffectWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectWhereInput, {
    nullable: true
  })
  isNot?: ItemFlingEffectWhereInput | undefined;
}
