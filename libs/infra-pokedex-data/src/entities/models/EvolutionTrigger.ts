import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { PokemonEvolution } from "../models/PokemonEvolution";
import { EvolutionTriggerCount } from "../resolvers/outputs/EvolutionTriggerCount";

@TypeGraphQL.ObjectType("EvolutionTrigger", {})
export class EvolutionTrigger {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  evolution?: PokemonEvolution[];

  @TypeGraphQL.Field(_type => EvolutionTriggerCount, {
    nullable: true
  })
  _count?: EvolutionTriggerCount | null;
}
