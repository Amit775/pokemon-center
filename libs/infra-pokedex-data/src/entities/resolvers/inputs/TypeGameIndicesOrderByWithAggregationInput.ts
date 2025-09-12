import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeGameIndicesAvgOrderByAggregateInput } from "../inputs/TypeGameIndicesAvgOrderByAggregateInput";
import { TypeGameIndicesCountOrderByAggregateInput } from "../inputs/TypeGameIndicesCountOrderByAggregateInput";
import { TypeGameIndicesMaxOrderByAggregateInput } from "../inputs/TypeGameIndicesMaxOrderByAggregateInput";
import { TypeGameIndicesMinOrderByAggregateInput } from "../inputs/TypeGameIndicesMinOrderByAggregateInput";
import { TypeGameIndicesSumOrderByAggregateInput } from "../inputs/TypeGameIndicesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TypeGameIndicesOrderByWithAggregationInput", {})
export class TypeGameIndicesOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => TypeGameIndicesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TypeGameIndicesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndicesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TypeGameIndicesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndicesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TypeGameIndicesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndicesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TypeGameIndicesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndicesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TypeGameIndicesSumOrderByAggregateInput | undefined;
}
