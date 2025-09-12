import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Items } from "../models/Items";
import { ItemFlingEffectsCount } from "../resolvers/outputs/ItemFlingEffectsCount";

@TypeGraphQL.ObjectType("ItemFlingEffects", {})
export class ItemFlingEffects {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  items?: Items[];

  @TypeGraphQL.Field(_type => ItemFlingEffectsCount, {
    nullable: true
  })
  _count?: ItemFlingEffectsCount | null;
}
