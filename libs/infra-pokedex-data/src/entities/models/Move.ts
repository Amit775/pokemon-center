import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ContestCombo } from "../models/ContestCombo";
import { ContestEffect } from "../models/ContestEffect";
import { ContestType } from "../models/ContestType";
import { Generation } from "../models/Generation";
import { Machine } from "../models/Machine";
import { MoveDamageClass } from "../models/MoveDamageClass";
import { MoveEffect } from "../models/MoveEffect";
import { MoveFlagMap } from "../models/MoveFlagMap";
import { MoveMeta } from "../models/MoveMeta";
import { MoveTarget } from "../models/MoveTarget";
import { PokemonEvolution } from "../models/PokemonEvolution";
import { PokemonMove } from "../models/PokemonMove";
import { SuperContestCombo } from "../models/SuperContestCombo";
import { SuperContestEffect } from "../models/SuperContestEffect";
import { Type } from "../models/Type";
import { MoveCount } from "../resolvers/outputs/MoveCount";

@TypeGraphQL.ObjectType("Move", {})
export class Move {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  generation_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  type_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  power?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  pp?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  accuracy?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  priority!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  target_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  damage_class_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  effect_id?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  effect_chance?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  contest_type_id?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  contest_effect_id?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  super_contest_effect_id?: number | null;

  generation?: Generation;

  type?: Type;

  target?: MoveTarget;

  damageClass?: MoveDamageClass;

  effect?: MoveEffect | null;

  contestType?: ContestType | null;

  contestEffect?: ContestEffect | null;

  superContestEffect?: SuperContestEffect | null;

  pokemonMoves?: PokemonMove[];

  machines?: Machine[];

  meta?: MoveMeta[];

  flagMap?: MoveFlagMap[];

  contestCombos?: ContestCombo[];

  contestCombosSecond?: ContestCombo[];

  superContestCombos?: SuperContestCombo[];

  superContestCombosSecond?: SuperContestCombo[];

  knownMoves?: PokemonEvolution[];

  @TypeGraphQL.Field(_type => MoveCount, {
    nullable: true
  })
  _count?: MoveCount | null;
}
