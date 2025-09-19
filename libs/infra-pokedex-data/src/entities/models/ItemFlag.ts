import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ItemFlagMap } from "../models/ItemFlagMap";
import { ItemFlagCount } from "../resolvers/outputs/ItemFlagCount";

@TypeGraphQL.ObjectType("ItemFlag", {})
export class ItemFlag {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  flagMap?: ItemFlagMap[];

  @TypeGraphQL.Field(_type => ItemFlagCount, {
    nullable: true
  })
  _count?: ItemFlagCount | null;
}
