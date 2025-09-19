import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveOrderByWithRelationInput } from "../inputs/MoveOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SuperContestComboOrderByWithRelationInput", {})
export class SuperContestComboOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  first_move_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  second_move_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MoveOrderByWithRelationInput, {
    nullable: true
  })
  firstMove?: MoveOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => MoveOrderByWithRelationInput, {
    nullable: true
  })
  secondMove?: MoveOrderByWithRelationInput | undefined;
}
