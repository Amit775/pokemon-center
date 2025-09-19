import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestEffectCountMovesArgs } from "./args/SuperContestEffectCountMovesArgs";

@TypeGraphQL.ObjectType("SuperContestEffectCount", {})
export class SuperContestEffectCount {
  moves!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "moves",
    nullable: false
  })
  getMoves(@TypeGraphQL.Root() root: SuperContestEffectCount, @TypeGraphQL.Args() args: SuperContestEffectCountMovesArgs): number {
    return root.moves;
  }
}
