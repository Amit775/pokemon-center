import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsAvgOrderByAggregateInput } from "../inputs/GenerationsAvgOrderByAggregateInput";
import { GenerationsCountOrderByAggregateInput } from "../inputs/GenerationsCountOrderByAggregateInput";
import { GenerationsMaxOrderByAggregateInput } from "../inputs/GenerationsMaxOrderByAggregateInput";
import { GenerationsMinOrderByAggregateInput } from "../inputs/GenerationsMinOrderByAggregateInput";
import { GenerationsSumOrderByAggregateInput } from "../inputs/GenerationsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GenerationsOrderByWithAggregationInput", {})
export class GenerationsOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => GenerationsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: GenerationsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: GenerationsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: GenerationsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: GenerationsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: GenerationsSumOrderByAggregateInput | undefined;
}
