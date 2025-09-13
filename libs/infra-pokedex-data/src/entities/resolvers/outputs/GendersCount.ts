import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GendersCountEvolutionArgs } from "./args/GendersCountEvolutionArgs";

@TypeGraphQL.ObjectType("GendersCount", {})
export class GendersCount {
  evolution!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "evolution",
    nullable: false
  })
  getEvolution(@TypeGraphQL.Root() root: GendersCount, @TypeGraphQL.Args() args: GendersCountEvolutionArgs): number {
    return root.evolution;
  }
}
