import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { PokemonEvolution } from "../models/PokemonEvolution";
import { EvolutionTriggersCount } from "../resolvers/outputs/EvolutionTriggersCount";

@TypeGraphQL.ObjectType("EvolutionTriggers", {})
export class EvolutionTriggers {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  evolution?: PokemonEvolution[];

  @TypeGraphQL.Field(_type => EvolutionTriggersCount, {
    nullable: true
  })
  _count?: EvolutionTriggersCount | null;
}
