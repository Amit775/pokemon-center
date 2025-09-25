import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaOrderByWithRelationInput } from "../inputs/MoveMetaOrderByWithRelationInput";
import { StatOrderByWithRelationInput } from "../inputs/StatOrderByWithRelationInput";
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

  @TypeGraphQL.Field(_type => StatOrderByWithRelationInput, {
    nullable: true
  })
  stat?: StatOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaOrderByWithRelationInput, {
    nullable: true
  })
  meta?: MoveMetaOrderByWithRelationInput | undefined;
}
