import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaAilmentsCountMetaArgs } from "./args/MoveMetaAilmentsCountMetaArgs";

@TypeGraphQL.ObjectType("MoveMetaAilmentsCount", {})
export class MoveMetaAilmentsCount {
  meta!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "meta",
    nullable: false
  })
  getMeta(@TypeGraphQL.Root() root: MoveMetaAilmentsCount, @TypeGraphQL.Args() args: MoveMetaAilmentsCountMetaArgs): number {
    return root.meta;
  }
}
