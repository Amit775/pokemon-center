import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnMovesContestEffectArgs } from "./args/CreateManyAndReturnMovesContestEffectArgs";
import { CreateManyAndReturnMovesContestTypeArgs } from "./args/CreateManyAndReturnMovesContestTypeArgs";
import { CreateManyAndReturnMovesEffectArgs } from "./args/CreateManyAndReturnMovesEffectArgs";
import { CreateManyAndReturnMovesSuperContestEffectArgs } from "./args/CreateManyAndReturnMovesSuperContestEffectArgs";
import { ContestEffects } from "../../models/ContestEffects";
import { ContestTypes } from "../../models/ContestTypes";
import { Generations } from "../../models/Generations";
import { MoveDamageClasses } from "../../models/MoveDamageClasses";
import { MoveEffects } from "../../models/MoveEffects";
import { MoveTargets } from "../../models/MoveTargets";
import { SuperContestEffects } from "../../models/SuperContestEffects";
import { Types } from "../../models/Types";

@TypeGraphQL.ObjectType("CreateManyAndReturnMoves", {})
export class CreateManyAndReturnMoves {
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
  power!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  pp!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  accuracy!: number | null;

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
  effect_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  effect_chance!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  contest_type_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  contest_effect_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  super_contest_effect_id!: number | null;

  @TypeGraphQL.Field(_type => Generations, {
    nullable: false
  })
  generation!: Generations;

  @TypeGraphQL.Field(_type => Types, {
    nullable: false
  })
  type!: Types;

  @TypeGraphQL.Field(_type => MoveTargets, {
    nullable: false
  })
  target!: MoveTargets;

  @TypeGraphQL.Field(_type => MoveDamageClasses, {
    nullable: false
  })
  damageClass!: MoveDamageClasses;

  effect!: MoveEffects | null;
  contestType!: ContestTypes | null;
  contestEffect!: ContestEffects | null;
  superContestEffect!: SuperContestEffects | null;

  @TypeGraphQL.Field(_type => MoveEffects, {
    name: "effect",
    nullable: true
  })
  getEffect(@TypeGraphQL.Root() root: CreateManyAndReturnMoves, @TypeGraphQL.Args() args: CreateManyAndReturnMovesEffectArgs): MoveEffects | null {
    return root.effect;
  }

  @TypeGraphQL.Field(_type => ContestTypes, {
    name: "contestType",
    nullable: true
  })
  getContestType(@TypeGraphQL.Root() root: CreateManyAndReturnMoves, @TypeGraphQL.Args() args: CreateManyAndReturnMovesContestTypeArgs): ContestTypes | null {
    return root.contestType;
  }

  @TypeGraphQL.Field(_type => ContestEffects, {
    name: "contestEffect",
    nullable: true
  })
  getContestEffect(@TypeGraphQL.Root() root: CreateManyAndReturnMoves, @TypeGraphQL.Args() args: CreateManyAndReturnMovesContestEffectArgs): ContestEffects | null {
    return root.contestEffect;
  }

  @TypeGraphQL.Field(_type => SuperContestEffects, {
    name: "superContestEffect",
    nullable: true
  })
  getSuperContestEffect(@TypeGraphQL.Root() root: CreateManyAndReturnMoves, @TypeGraphQL.Args() args: CreateManyAndReturnMovesSuperContestEffectArgs): SuperContestEffects | null {
    return root.superContestEffect;
  }
}
