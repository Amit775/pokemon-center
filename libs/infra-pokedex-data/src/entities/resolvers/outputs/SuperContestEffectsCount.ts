import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestEffectsCountMovesArgs } from "./args/SuperContestEffectsCountMovesArgs";

@TypeGraphQL.ObjectType("SuperContestEffectsCount", {})
export class SuperContestEffectsCount {
  moves!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "moves",
    nullable: false
  })
  getMoves(@TypeGraphQL.Root() root: SuperContestEffectsCount, @TypeGraphQL.Args() args: SuperContestEffectsCountMovesArgs): number {
    return root.moves;
  }
}
