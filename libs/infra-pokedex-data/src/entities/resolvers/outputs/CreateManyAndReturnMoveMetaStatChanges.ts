import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Move } from "../../models/Move";
import { MoveMeta } from "../../models/MoveMeta";
import { Stat } from "../../models/Stat";

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

  @TypeGraphQL.Field(_type => Move, {
    nullable: false
  })
  move!: Move;

  @TypeGraphQL.Field(_type => Stat, {
    nullable: false
  })
  stat!: Stat;

  @TypeGraphQL.Field(_type => MoveMeta, {
    nullable: false
  })
  meta!: MoveMeta;
}
