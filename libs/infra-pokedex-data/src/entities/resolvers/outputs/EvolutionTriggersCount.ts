import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionTriggersCountEvolutionArgs } from "./args/EvolutionTriggersCountEvolutionArgs";

@TypeGraphQL.ObjectType("EvolutionTriggersCount", {})
export class EvolutionTriggersCount {
  evolution!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "evolution",
    nullable: false
  })
  getEvolution(@TypeGraphQL.Root() root: EvolutionTriggersCount, @TypeGraphQL.Args() args: EvolutionTriggersCountEvolutionArgs): number {
    return root.evolution;
  }
}
