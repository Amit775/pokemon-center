import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagsCountFlagMapArgs } from "./args/MoveFlagsCountFlagMapArgs";

@TypeGraphQL.ObjectType("MoveFlagsCount", {})
export class MoveFlagsCount {
  flagMap!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "flagMap",
    nullable: false
  })
  getFlagMap(@TypeGraphQL.Root() root: MoveFlagsCount, @TypeGraphQL.Args() args: MoveFlagsCountFlagMapArgs): number {
    return root.flagMap;
  }
}
