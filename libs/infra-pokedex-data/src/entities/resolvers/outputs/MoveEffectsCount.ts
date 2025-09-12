import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveEffectsCountMovesArgs } from "./args/MoveEffectsCountMovesArgs";

@TypeGraphQL.ObjectType("MoveEffectsCount", {})
export class MoveEffectsCount {
  moves!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "moves",
    nullable: false
  })
  getMoves(@TypeGraphQL.Root() root: MoveEffectsCount, @TypeGraphQL.Args() args: MoveEffectsCountMovesArgs): number {
    return root.moves;
  }
}
