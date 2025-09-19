import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Characteristic } from "../models/Characteristic";
import { MoveMetaStatChanges } from "../models/MoveMetaStatChanges";
import { Nature } from "../models/Nature";
import { PokemonStat } from "../models/PokemonStat";
import { StatCount } from "../resolvers/outputs/StatCount";

@TypeGraphQL.ObjectType("Stat", {})
export class Stat {
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

  pokemonStats?: PokemonStat[];

  moveMetaStatChanges?: MoveMetaStatChanges[];

  characteristics?: Characteristic[];

  natures?: Nature[];

  naturesIncreased?: Nature[];

  @TypeGraphQL.Field(_type => StatCount, {
    nullable: true
  })
  _count?: StatCount | null;
}
