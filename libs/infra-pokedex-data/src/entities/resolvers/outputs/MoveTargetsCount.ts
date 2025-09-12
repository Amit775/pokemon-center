import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveTargetsCountMovesArgs } from "./args/MoveTargetsCountMovesArgs";

@TypeGraphQL.ObjectType("MoveTargetsCount", {})
export class MoveTargetsCount {
  moves!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "moves",
    nullable: false
  })
  getMoves(@TypeGraphQL.Root() root: MoveTargetsCount, @TypeGraphQL.Args() args: MoveTargetsCountMovesArgs): number {
    return root.moves;
  }
}
