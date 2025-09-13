import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagsOrderByWithRelationInput } from "../inputs/MoveFlagsOrderByWithRelationInput";
import { MovesOrderByWithRelationInput } from "../inputs/MovesOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MoveFlagMapOrderByWithRelationInput", {})
export class MoveFlagMapOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  move_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  move_flag_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MovesOrderByWithRelationInput, {
    nullable: true
  })
  move?: MovesOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagsOrderByWithRelationInput, {
    nullable: true
  })
  flag?: MoveFlagsOrderByWithRelationInput | undefined;
}
