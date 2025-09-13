import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ContestCombos } from "../models/ContestCombos";
import { ContestEffects } from "../models/ContestEffects";
import { ContestTypes } from "../models/ContestTypes";
import { Generations } from "../models/Generations";
import { Machines } from "../models/Machines";
import { MoveDamageClasses } from "../models/MoveDamageClasses";
import { MoveEffects } from "../models/MoveEffects";
import { MoveFlagMap } from "../models/MoveFlagMap";
import { MoveMeta } from "../models/MoveMeta";
import { MoveMetaStatChanges } from "../models/MoveMetaStatChanges";
import { MoveTargets } from "../models/MoveTargets";
import { PokemonEvolution } from "../models/PokemonEvolution";
import { PokemonMoves } from "../models/PokemonMoves";
import { SuperContestCombos } from "../models/SuperContestCombos";
import { SuperContestEffects } from "../models/SuperContestEffects";
import { Types } from "../models/Types";
import { MovesCount } from "../resolvers/outputs/MovesCount";

@TypeGraphQL.ObjectType("Moves", {})
export class Moves {
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

  generation?: Generations;

  type?: Types;

  target?: MoveTargets;

  damageClass?: MoveDamageClasses;

  effect?: MoveEffects | null;

  contestType?: ContestTypes | null;

  contestEffect?: ContestEffects | null;

  superContestEffect?: SuperContestEffects | null;

  pokemonMoves?: PokemonMoves[];

  machines?: Machines[];

  meta?: MoveMeta[];

  metaStatChanges?: MoveMetaStatChanges[];

  flagMap?: MoveFlagMap[];

  contestCombos?: ContestCombos[];

  contestCombosSecond?: ContestCombos[];

  superContestCombos?: SuperContestCombos[];

  superContestCombosSecond?: SuperContestCombos[];

  knownMoves?: PokemonEvolution[];

  @TypeGraphQL.Field(_type => MovesCount, {
    nullable: true
  })
  _count?: MovesCount | null;
}
