import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Item } from "../models/Item";
import { PokemonSpecies } from "../models/PokemonSpecies";
import { EvolutionChainCount } from "../resolvers/outputs/EvolutionChainCount";

@TypeGraphQL.ObjectType("EvolutionChain", {})
export class EvolutionChain {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  baby_trigger_item_id?: number | null;

  babyTriggerItem?: Item | null;

  species?: PokemonSpecies[];

  @TypeGraphQL.Field(_type => EvolutionChainCount, {
    nullable: true
  })
  _count?: EvolutionChainCount | null;
}
