import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestEffectCountMovesArgs } from "./args/ContestEffectCountMovesArgs";

@TypeGraphQL.ObjectType("ContestEffectCount", {})
export class ContestEffectCount {
  moves!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "moves",
    nullable: false
  })
  getMoves(@TypeGraphQL.Root() root: ContestEffectCount, @TypeGraphQL.Args() args: ContestEffectCountMovesArgs): number {
    return root.moves;
  }
}
