import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagCountFlagMapArgs } from "./args/ItemFlagCountFlagMapArgs";

@TypeGraphQL.ObjectType("ItemFlagCount", {})
export class ItemFlagCount {
  flagMap!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "flagMap",
    nullable: false
  })
  getFlagMap(@TypeGraphQL.Root() root: ItemFlagCount, @TypeGraphQL.Args() args: ItemFlagCountFlagMapArgs): number {
    return root.flagMap;
  }
}
