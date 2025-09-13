import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilitiesAvgOrderByAggregateInput } from "../inputs/AbilitiesAvgOrderByAggregateInput";
import { AbilitiesCountOrderByAggregateInput } from "../inputs/AbilitiesCountOrderByAggregateInput";
import { AbilitiesMaxOrderByAggregateInput } from "../inputs/AbilitiesMaxOrderByAggregateInput";
import { AbilitiesMinOrderByAggregateInput } from "../inputs/AbilitiesMinOrderByAggregateInput";
import { AbilitiesSumOrderByAggregateInput } from "../inputs/AbilitiesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AbilitiesOrderByWithAggregationInput", {})
export class AbilitiesOrderByWithAggregationInput {
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
  generation_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_main_series?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AbilitiesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: AbilitiesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AbilitiesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: AbilitiesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AbilitiesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: AbilitiesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AbilitiesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: AbilitiesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AbilitiesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: AbilitiesSumOrderByAggregateInput | undefined;
}
