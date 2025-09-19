import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveBattleStyle } from "../../models/MoveBattleStyle";
import { Nature } from "../../models/Nature";

@TypeGraphQL.ObjectType("CreateManyAndReturnNatureBattleStylePreference", {})
export class CreateManyAndReturnNatureBattleStylePreference {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  nature_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  move_battle_style_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  low_hp_preference!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  high_hp_preference!: number;

  @TypeGraphQL.Field(_type => Nature, {
    nullable: false
  })
  nature!: Nature;

  @TypeGraphQL.Field(_type => MoveBattleStyle, {
    nullable: false
  })
  battleStyle!: MoveBattleStyle;
}
