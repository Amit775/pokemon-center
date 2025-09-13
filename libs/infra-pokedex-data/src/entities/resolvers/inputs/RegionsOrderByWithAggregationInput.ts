import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionsAvgOrderByAggregateInput } from "../inputs/RegionsAvgOrderByAggregateInput";
import { RegionsCountOrderByAggregateInput } from "../inputs/RegionsCountOrderByAggregateInput";
import { RegionsMaxOrderByAggregateInput } from "../inputs/RegionsMaxOrderByAggregateInput";
import { RegionsMinOrderByAggregateInput } from "../inputs/RegionsMinOrderByAggregateInput";
import { RegionsSumOrderByAggregateInput } from "../inputs/RegionsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RegionsOrderByWithAggregationInput", {})
export class RegionsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => RegionsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: RegionsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RegionsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: RegionsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RegionsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: RegionsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RegionsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: RegionsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RegionsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: RegionsSumOrderByAggregateInput | undefined;
}
