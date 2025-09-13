import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveBattleStylesOrderByWithRelationInput } from "../inputs/MoveBattleStylesOrderByWithRelationInput";
import { NaturesOrderByWithRelationInput } from "../inputs/NaturesOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("NatureBattleStylePreferencesOrderByWithRelationInput", {})
export class NatureBattleStylePreferencesOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  nature_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  move_battle_style_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  low_hp_preference?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  high_hp_preference?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => NaturesOrderByWithRelationInput, {
    nullable: true
  })
  nature?: NaturesOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => MoveBattleStylesOrderByWithRelationInput, {
    nullable: true
  })
  battleStyle?: MoveBattleStylesOrderByWithRelationInput | undefined;
}
