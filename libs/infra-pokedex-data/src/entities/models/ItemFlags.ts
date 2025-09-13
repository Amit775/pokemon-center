import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ItemFlagMap } from "../models/ItemFlagMap";
import { ItemFlagsCount } from "../resolvers/outputs/ItemFlagsCount";

@TypeGraphQL.ObjectType("ItemFlags", {})
export class ItemFlags {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  flagMap?: ItemFlagMap[];

  @TypeGraphQL.Field(_type => ItemFlagsCount, {
    nullable: true
  })
  _count?: ItemFlagsCount | null;
}
