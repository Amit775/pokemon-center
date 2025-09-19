import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationAvgOrderByAggregateInput } from "../inputs/GenerationAvgOrderByAggregateInput";
import { GenerationCountOrderByAggregateInput } from "../inputs/GenerationCountOrderByAggregateInput";
import { GenerationMaxOrderByAggregateInput } from "../inputs/GenerationMaxOrderByAggregateInput";
import { GenerationMinOrderByAggregateInput } from "../inputs/GenerationMinOrderByAggregateInput";
import { GenerationSumOrderByAggregateInput } from "../inputs/GenerationSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GenerationOrderByWithAggregationInput", {})
export class GenerationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  main_region_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GenerationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: GenerationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GenerationAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: GenerationAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GenerationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: GenerationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GenerationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: GenerationMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GenerationSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: GenerationSumOrderByAggregateInput | undefined;
}
