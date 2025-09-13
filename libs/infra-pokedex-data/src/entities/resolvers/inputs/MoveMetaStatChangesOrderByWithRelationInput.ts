import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaOrderByWithRelationInput } from "../inputs/MoveMetaOrderByWithRelationInput";
import { MovesOrderByWithRelationInput } from "../inputs/MovesOrderByWithRelationInput";
import { StatsOrderByWithRelationInput } from "../inputs/StatsOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MoveMetaStatChangesOrderByWithRelationInput", {})
export class MoveMetaStatChangesOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  move_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  stat_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  change?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MovesOrderByWithRelationInput, {
    nullable: true
  })
  move?: MovesOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => StatsOrderByWithRelationInput, {
    nullable: true
  })
  stat?: StatsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaOrderByWithRelationInput, {
    nullable: true
  })
  meta?: MoveMetaOrderByWithRelationInput | undefined;
}
