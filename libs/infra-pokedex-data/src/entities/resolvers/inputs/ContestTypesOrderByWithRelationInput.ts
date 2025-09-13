import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorsOrderByRelationAggregateInput } from "../inputs/BerryFlavorsOrderByRelationAggregateInput";
import { MovesOrderByRelationAggregateInput } from "../inputs/MovesOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ContestTypesOrderByWithRelationInput", {})
export class ContestTypesOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => BerryFlavorsOrderByRelationAggregateInput, {
    nullable: true
  })
  berryFlavors?: BerryFlavorsOrderByRelationAggregateInput | undefined;
}
