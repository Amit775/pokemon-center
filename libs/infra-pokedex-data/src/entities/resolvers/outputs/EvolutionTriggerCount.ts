import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionTriggerCountEvolutionArgs } from "./args/EvolutionTriggerCountEvolutionArgs";

@TypeGraphQL.ObjectType("EvolutionTriggerCount", {})
export class EvolutionTriggerCount {
  evolution!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "evolution",
    nullable: false
  })
  getEvolution(@TypeGraphQL.Root() root: EvolutionTriggerCount, @TypeGraphQL.Args() args: EvolutionTriggerCountEvolutionArgs): number {
    return root.evolution;
  }
}
