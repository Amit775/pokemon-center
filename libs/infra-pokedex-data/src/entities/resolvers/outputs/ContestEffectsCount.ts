import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestEffectsCountMovesArgs } from "./args/ContestEffectsCountMovesArgs";

@TypeGraphQL.ObjectType("ContestEffectsCount", {})
export class ContestEffectsCount {
  moves!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "moves",
    nullable: false
  })
  getMoves(@TypeGraphQL.Root() root: ContestEffectsCount, @TypeGraphQL.Args() args: ContestEffectsCountMovesArgs): number {
    return root.moves;
  }
}
