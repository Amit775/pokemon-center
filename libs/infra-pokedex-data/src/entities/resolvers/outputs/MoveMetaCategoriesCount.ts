import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCategoriesCountMetaArgs } from "./args/MoveMetaCategoriesCountMetaArgs";

@TypeGraphQL.ObjectType("MoveMetaCategoriesCount", {})
export class MoveMetaCategoriesCount {
  meta!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "meta",
    nullable: false
  })
  getMeta(@TypeGraphQL.Root() root: MoveMetaCategoriesCount, @TypeGraphQL.Args() args: MoveMetaCategoriesCountMetaArgs): number {
    return root.meta;
  }
}
