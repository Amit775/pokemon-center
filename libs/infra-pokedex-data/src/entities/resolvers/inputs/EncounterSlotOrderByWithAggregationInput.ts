import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotAvgOrderByAggregateInput } from "../inputs/EncounterSlotAvgOrderByAggregateInput";
import { EncounterSlotCountOrderByAggregateInput } from "../inputs/EncounterSlotCountOrderByAggregateInput";
import { EncounterSlotMaxOrderByAggregateInput } from "../inputs/EncounterSlotMaxOrderByAggregateInput";
import { EncounterSlotMinOrderByAggregateInput } from "../inputs/EncounterSlotMinOrderByAggregateInput";
import { EncounterSlotSumOrderByAggregateInput } from "../inputs/EncounterSlotSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EncounterSlotOrderByWithAggregationInput", {})
export class EncounterSlotOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  version_group_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  encounter_method_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  slot?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rarity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EncounterSlotCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: EncounterSlotAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EncounterSlotMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EncounterSlotMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: EncounterSlotSumOrderByAggregateInput | undefined;
}
