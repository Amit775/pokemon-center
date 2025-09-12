import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveBattleStyles } from "../../models/MoveBattleStyles";
import { Natures } from "../../models/Natures";

@TypeGraphQL.ObjectType("CreateManyAndReturnNatureBattleStylePreferences", {})
export class CreateManyAndReturnNatureBattleStylePreferences {
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

  @TypeGraphQL.Field(_type => Natures, {
    nullable: false
  })
  nature!: Natures;

  @TypeGraphQL.Field(_type => MoveBattleStyles, {
    nullable: false
  })
  battleStyle!: MoveBattleStyles;
}
