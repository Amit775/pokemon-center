import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaAilmentCountMetaArgs } from "./args/MoveMetaAilmentCountMetaArgs";

@TypeGraphQL.ObjectType("MoveMetaAilmentCount", {})
export class MoveMetaAilmentCount {
  meta!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "meta",
    nullable: false
  })
  getMeta(@TypeGraphQL.Root() root: MoveMetaAilmentCount, @TypeGraphQL.Args() args: MoveMetaAilmentCountMetaArgs): number {
    return root.meta;
  }
}
