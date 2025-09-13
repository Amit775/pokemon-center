import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCountStatChangesArgs } from "./args/MoveMetaCountStatChangesArgs";

@TypeGraphQL.ObjectType("MoveMetaCount", {})
export class MoveMetaCount {
  statChanges!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "statChanges",
    nullable: false
  })
  getStatChanges(@TypeGraphQL.Root() root: MoveMetaCount, @TypeGraphQL.Args() args: MoveMetaCountStatChangesArgs): number {
    return root.statChanges;
  }
}
