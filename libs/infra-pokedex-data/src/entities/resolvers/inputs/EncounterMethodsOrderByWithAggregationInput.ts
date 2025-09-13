import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodsAvgOrderByAggregateInput } from "../inputs/EncounterMethodsAvgOrderByAggregateInput";
import { EncounterMethodsCountOrderByAggregateInput } from "../inputs/EncounterMethodsCountOrderByAggregateInput";
import { EncounterMethodsMaxOrderByAggregateInput } from "../inputs/EncounterMethodsMaxOrderByAggregateInput";
import { EncounterMethodsMinOrderByAggregateInput } from "../inputs/EncounterMethodsMinOrderByAggregateInput";
import { EncounterMethodsSumOrderByAggregateInput } from "../inputs/EncounterMethodsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EncounterMethodsOrderByWithAggregationInput", {})
export class EncounterMethodsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EncounterMethodsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: EncounterMethodsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EncounterMethodsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EncounterMethodsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: EncounterMethodsSumOrderByAggregateInput | undefined;
}
