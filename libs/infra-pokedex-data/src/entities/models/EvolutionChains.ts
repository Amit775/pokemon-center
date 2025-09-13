import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Items } from "../models/Items";
import { PokemonSpecies } from "../models/PokemonSpecies";
import { EvolutionChainsCount } from "../resolvers/outputs/EvolutionChainsCount";

@TypeGraphQL.ObjectType("EvolutionChains", {})
export class EvolutionChains {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  baby_trigger_item_id?: number | null;

  babyTriggerItem?: Items | null;

  species?: PokemonSpecies[];

  @TypeGraphQL.Field(_type => EvolutionChainsCount, {
    nullable: true
  })
  _count?: EvolutionChainsCount | null;
}
