import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCategoryCountMetaArgs } from "./args/MoveMetaCategoryCountMetaArgs";

@TypeGraphQL.ObjectType("MoveMetaCategoryCount", {})
export class MoveMetaCategoryCount {
  meta!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "meta",
    nullable: false
  })
  getMeta(@TypeGraphQL.Root() root: MoveMetaCategoryCount, @TypeGraphQL.Args() args: MoveMetaCategoryCountMetaArgs): number {
    return root.meta;
  }
}
