import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveEffectCountMovesArgs } from "./args/MoveEffectCountMovesArgs";

@TypeGraphQL.ObjectType("MoveEffectCount", {})
export class MoveEffectCount {
  moves!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "moves",
    nullable: false
  })
  getMoves(@TypeGraphQL.Root() root: MoveEffectCount, @TypeGraphQL.Args() args: MoveEffectCountMovesArgs): number {
    return root.moves;
  }
}
