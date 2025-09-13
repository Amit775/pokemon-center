import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotsAvgOrderByAggregateInput } from "../inputs/EncounterSlotsAvgOrderByAggregateInput";
import { EncounterSlotsCountOrderByAggregateInput } from "../inputs/EncounterSlotsCountOrderByAggregateInput";
import { EncounterSlotsMaxOrderByAggregateInput } from "../inputs/EncounterSlotsMaxOrderByAggregateInput";
import { EncounterSlotsMinOrderByAggregateInput } from "../inputs/EncounterSlotsMinOrderByAggregateInput";
import { EncounterSlotsSumOrderByAggregateInput } from "../inputs/EncounterSlotsSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EncounterSlotsOrderByWithAggregationInput", {})
export class EncounterSlotsOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => EncounterSlotsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EncounterSlotsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: EncounterSlotsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EncounterSlotsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EncounterSlotsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: EncounterSlotsSumOrderByAggregateInput | undefined;
}
