import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeEfficacyAvgOrderByAggregateInput } from "../inputs/TypeEfficacyAvgOrderByAggregateInput";
import { TypeEfficacyCountOrderByAggregateInput } from "../inputs/TypeEfficacyCountOrderByAggregateInput";
import { TypeEfficacyMaxOrderByAggregateInput } from "../inputs/TypeEfficacyMaxOrderByAggregateInput";
import { TypeEfficacyMinOrderByAggregateInput } from "../inputs/TypeEfficacyMinOrderByAggregateInput";
import { TypeEfficacySumOrderByAggregateInput } from "../inputs/TypeEfficacySumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TypeEfficacyOrderByWithAggregationInput", {})
export class TypeEfficacyOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  damage_type_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  target_type_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  damage_factor?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TypeEfficacyCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TypeEfficacyCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TypeEfficacyAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TypeEfficacyAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TypeEfficacyMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TypeEfficacyMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TypeEfficacyMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TypeEfficacyMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TypeEfficacySumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TypeEfficacySumOrderByAggregateInput | undefined;
}
