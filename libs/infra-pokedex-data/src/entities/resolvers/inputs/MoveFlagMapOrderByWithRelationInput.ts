import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagOrderByWithRelationInput } from "../inputs/MoveFlagOrderByWithRelationInput";
import { MoveOrderByWithRelationInput } from "../inputs/MoveOrderByWithRelationInput";
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

  @TypeGraphQL.Field(_type => MoveOrderByWithRelationInput, {
    nullable: true
  })
  move?: MoveOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagOrderByWithRelationInput, {
    nullable: true
  })
  flag?: MoveFlagOrderByWithRelationInput | undefined;
}
