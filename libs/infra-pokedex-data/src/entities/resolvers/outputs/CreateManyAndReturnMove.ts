import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnMoveContestEffectArgs } from "./args/CreateManyAndReturnMoveContestEffectArgs";
import { CreateManyAndReturnMoveContestTypeArgs } from "./args/CreateManyAndReturnMoveContestTypeArgs";
import { CreateManyAndReturnMoveEffectArgs } from "./args/CreateManyAndReturnMoveEffectArgs";
import { CreateManyAndReturnMoveSuperContestEffectArgs } from "./args/CreateManyAndReturnMoveSuperContestEffectArgs";
import { ContestEffect } from "../../models/ContestEffect";
import { ContestType } from "../../models/ContestType";
import { Generation } from "../../models/Generation";
import { MoveDamageClass } from "../../models/MoveDamageClass";
import { MoveEffect } from "../../models/MoveEffect";
import { MoveTarget } from "../../models/MoveTarget";
import { SuperContestEffect } from "../../models/SuperContestEffect";
import { Type } from "../../models/Type";

@TypeGraphQL.ObjectType("CreateManyAndReturnMove", {})
export class CreateManyAndReturnMove {
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

  @TypeGraphQL.Field(_type => Generation, {
    nullable: false
  })
  generation!: Generation;

  @TypeGraphQL.Field(_type => Type, {
    nullable: false
  })
  type!: Type;

  @TypeGraphQL.Field(_type => MoveTarget, {
    nullable: false
  })
  target!: MoveTarget;

  @TypeGraphQL.Field(_type => MoveDamageClass, {
    nullable: false
  })
  damageClass!: MoveDamageClass;

  effect!: MoveEffect | null;
  contestType!: ContestType | null;
  contestEffect!: ContestEffect | null;
  superContestEffect!: SuperContestEffect | null;

  @TypeGraphQL.Field(_type => MoveEffect, {
    name: "effect",
    nullable: true
  })
  getEffect(@TypeGraphQL.Root() root: CreateManyAndReturnMove, @TypeGraphQL.Args() args: CreateManyAndReturnMoveEffectArgs): MoveEffect | null {
    return root.effect;
  }

  @TypeGraphQL.Field(_type => ContestType, {
    name: "contestType",
    nullable: true
  })
  getContestType(@TypeGraphQL.Root() root: CreateManyAndReturnMove, @TypeGraphQL.Args() args: CreateManyAndReturnMoveContestTypeArgs): ContestType | null {
    return root.contestType;
  }

  @TypeGraphQL.Field(_type => ContestEffect, {
    name: "contestEffect",
    nullable: true
  })
  getContestEffect(@TypeGraphQL.Root() root: CreateManyAndReturnMove, @TypeGraphQL.Args() args: CreateManyAndReturnMoveContestEffectArgs): ContestEffect | null {
    return root.contestEffect;
  }

  @TypeGraphQL.Field(_type => SuperContestEffect, {
    name: "superContestEffect",
    nullable: true
  })
  getSuperContestEffect(@TypeGraphQL.Root() root: CreateManyAndReturnMove, @TypeGraphQL.Args() args: CreateManyAndReturnMoveSuperContestEffectArgs): SuperContestEffect | null {
    return root.superContestEffect;
  }
}
