import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveOrderByRelationAggregateInput } from "../inputs/MoveOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SuperContestEffectOrderByWithRelationInput", {})
export class SuperContestEffectOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  appeal?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MoveOrderByRelationAggregateInput, {
    nullable: true
  })
  moves?: MoveOrderByRelationAggregateInput | undefined;
}
