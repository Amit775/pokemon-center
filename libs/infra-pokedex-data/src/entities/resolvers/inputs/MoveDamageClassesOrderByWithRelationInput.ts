import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesOrderByRelationAggregateInput } from "../inputs/MovesOrderByRelationAggregateInput";
import { TypesOrderByRelationAggregateInput } from "../inputs/TypesOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MoveDamageClassesOrderByWithRelationInput", {})
export class MoveDamageClassesOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MovesOrderByRelationAggregateInput, {
    nullable: true
  })
  moves?: MovesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TypesOrderByRelationAggregateInput, {
    nullable: true
  })
  types?: TypesOrderByRelationAggregateInput | undefined;
}
