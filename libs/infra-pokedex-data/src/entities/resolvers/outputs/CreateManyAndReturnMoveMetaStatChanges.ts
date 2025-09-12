import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMeta } from "../../models/MoveMeta";
import { Moves } from "../../models/Moves";
import { Stats } from "../../models/Stats";

@TypeGraphQL.ObjectType("CreateManyAndReturnMoveMetaStatChanges", {})
export class CreateManyAndReturnMoveMetaStatChanges {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  move_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  stat_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  change!: number;

  @TypeGraphQL.Field(_type => Moves, {
    nullable: false
  })
  move!: Moves;

  @TypeGraphQL.Field(_type => Stats, {
    nullable: false
  })
  stat!: Stats;

  @TypeGraphQL.Field(_type => MoveMeta, {
    nullable: false
  })
  meta!: MoveMeta;
}
