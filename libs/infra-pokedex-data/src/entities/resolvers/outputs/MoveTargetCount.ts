import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveTargetCountMovesArgs } from "./args/MoveTargetCountMovesArgs";

@TypeGraphQL.ObjectType("MoveTargetCount", {})
export class MoveTargetCount {
  moves!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "moves",
    nullable: false
  })
  getMoves(@TypeGraphQL.Root() root: MoveTargetCount, @TypeGraphQL.Args() args: MoveTargetCountMovesArgs): number {
    return root.moves;
  }
}
