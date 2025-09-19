import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodAvgOrderByAggregateInput } from "../inputs/EncounterMethodAvgOrderByAggregateInput";
import { EncounterMethodCountOrderByAggregateInput } from "../inputs/EncounterMethodCountOrderByAggregateInput";
import { EncounterMethodMaxOrderByAggregateInput } from "../inputs/EncounterMethodMaxOrderByAggregateInput";
import { EncounterMethodMinOrderByAggregateInput } from "../inputs/EncounterMethodMinOrderByAggregateInput";
import { EncounterMethodSumOrderByAggregateInput } from "../inputs/EncounterMethodSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EncounterMethodOrderByWithAggregationInput", {})
export class EncounterMethodOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => EncounterMethodCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EncounterMethodCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: EncounterMethodAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EncounterMethodMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EncounterMethodMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: EncounterMethodSumOrderByAggregateInput | undefined;
}
