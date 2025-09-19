import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenderCountEvolutionArgs } from "./args/GenderCountEvolutionArgs";

@TypeGraphQL.ObjectType("GenderCount", {})
export class GenderCount {
  evolution!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "evolution",
    nullable: false
  })
  getEvolution(@TypeGraphQL.Root() root: GenderCount, @TypeGraphQL.Args() args: GenderCountEvolutionArgs): number {
    return root.evolution;
  }
}
