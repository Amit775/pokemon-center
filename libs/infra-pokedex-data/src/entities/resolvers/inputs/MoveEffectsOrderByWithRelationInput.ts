import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesOrderByRelationAggregateInput } from "../inputs/MovesOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MoveEffectsOrderByWithRelationInput", {})
export class MoveEffectsOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MovesOrderByRelationAggregateInput, {
    nullable: true
  })
  moves?: MovesOrderByRelationAggregateInput | undefined;
}
