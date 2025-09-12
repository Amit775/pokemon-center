import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnMoveMetaMetaAilmentArgs } from "./args/CreateManyAndReturnMoveMetaMetaAilmentArgs";
import { MoveMetaAilments } from "../../models/MoveMetaAilments";
import { MoveMetaCategories } from "../../models/MoveMetaCategories";
import { Moves } from "../../models/Moves";

@TypeGraphQL.ObjectType("CreateManyAndReturnMoveMeta", {})
export class CreateManyAndReturnMoveMeta {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  move_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  meta_category_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  meta_ailment_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  min_hits!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  max_hits!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  min_turns!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  max_turns!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  drain!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  healing!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  crit_rate!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ailment_chance!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  flinch_chance!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  stat_chance!: number;

  @TypeGraphQL.Field(_type => Moves, {
    nullable: false
  })
  move!: Moves;

  @TypeGraphQL.Field(_type => MoveMetaCategories, {
    nullable: false
  })
  metaCategory!: MoveMetaCategories;

  metaAilment!: MoveMetaAilments | null;

  @TypeGraphQL.Field(_type => MoveMetaAilments, {
    name: "metaAilment",
    nullable: true
  })
  getMetaAilment(@TypeGraphQL.Root() root: CreateManyAndReturnMoveMeta, @TypeGraphQL.Args() args: CreateManyAndReturnMoveMetaMetaAilmentArgs): MoveMetaAilments | null {
    return root.metaAilment;
  }
}
