import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagCountFlagMapArgs } from "./args/MoveFlagCountFlagMapArgs";

@TypeGraphQL.ObjectType("MoveFlagCount", {})
export class MoveFlagCount {
  flagMap!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "flagMap",
    nullable: false
  })
  getFlagMap(@TypeGraphQL.Root() root: MoveFlagCount, @TypeGraphQL.Args() args: MoveFlagCountFlagMapArgs): number {
    return root.flagMap;
  }
}
