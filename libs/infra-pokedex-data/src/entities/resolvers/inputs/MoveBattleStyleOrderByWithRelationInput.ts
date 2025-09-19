import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferenceOrderByRelationAggregateInput } from "../inputs/NatureBattleStylePreferenceOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MoveBattleStyleOrderByWithRelationInput", {})
export class MoveBattleStyleOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceOrderByRelationAggregateInput, {
    nullable: true
  })
  naturePreferences?: NatureBattleStylePreferenceOrderByRelationAggregateInput | undefined;
}
