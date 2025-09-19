import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeGameIndexAvgOrderByAggregateInput } from "../inputs/TypeGameIndexAvgOrderByAggregateInput";
import { TypeGameIndexCountOrderByAggregateInput } from "../inputs/TypeGameIndexCountOrderByAggregateInput";
import { TypeGameIndexMaxOrderByAggregateInput } from "../inputs/TypeGameIndexMaxOrderByAggregateInput";
import { TypeGameIndexMinOrderByAggregateInput } from "../inputs/TypeGameIndexMinOrderByAggregateInput";
import { TypeGameIndexSumOrderByAggregateInput } from "../inputs/TypeGameIndexSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TypeGameIndexOrderByWithAggregationInput", {})
export class TypeGameIndexOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  generation_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  game_index?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndexCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TypeGameIndexCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndexAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TypeGameIndexAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndexMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TypeGameIndexMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndexMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TypeGameIndexMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndexSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TypeGameIndexSumOrderByAggregateInput | undefined;
}
