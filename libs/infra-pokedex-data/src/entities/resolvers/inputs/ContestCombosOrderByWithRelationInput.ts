import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesOrderByWithRelationInput } from "../inputs/MovesOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ContestCombosOrderByWithRelationInput", {})
export class ContestCombosOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  first_move_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  second_move_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MovesOrderByWithRelationInput, {
    nullable: true
  })
  firstMove?: MovesOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => MovesOrderByWithRelationInput, {
    nullable: true
  })
  secondMove?: MovesOrderByWithRelationInput | undefined;
}
