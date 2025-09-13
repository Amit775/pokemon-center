import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagsCountFlagMapArgs } from "./args/ItemFlagsCountFlagMapArgs";

@TypeGraphQL.ObjectType("ItemFlagsCount", {})
export class ItemFlagsCount {
  flagMap!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "flagMap",
    nullable: false
  })
  getFlagMap(@TypeGraphQL.Root() root: ItemFlagsCount, @TypeGraphQL.Args() args: ItemFlagsCountFlagMapArgs): number {
    return root.flagMap;
  }
}
