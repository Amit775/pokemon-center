import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Characteristics } from "../models/Characteristics";
import { MoveMetaStatChanges } from "../models/MoveMetaStatChanges";
import { Natures } from "../models/Natures";
import { PokemonStats } from "../models/PokemonStats";
import { StatsCount } from "../resolvers/outputs/StatsCount";

@TypeGraphQL.ObjectType("Stats", {})
export class Stats {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  damage_class_id?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  is_battle_only!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  game_index?: number | null;

  pokemonStats?: PokemonStats[];

  moveMetaStatChanges?: MoveMetaStatChanges[];

  characteristics?: Characteristics[];

  natures?: Natures[];

  naturesIncreased?: Natures[];

  @TypeGraphQL.Field(_type => StatsCount, {
    nullable: true
  })
  _count?: StatsCount | null;
}
