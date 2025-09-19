import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCategoryAvgOrderByAggregateInput } from "../inputs/MoveMetaCategoryAvgOrderByAggregateInput";
import { MoveMetaCategoryCountOrderByAggregateInput } from "../inputs/MoveMetaCategoryCountOrderByAggregateInput";
import { MoveMetaCategoryMaxOrderByAggregateInput } from "../inputs/MoveMetaCategoryMaxOrderByAggregateInput";
import { MoveMetaCategoryMinOrderByAggregateInput } from "../inputs/MoveMetaCategoryMinOrderByAggregateInput";
import { MoveMetaCategorySumOrderByAggregateInput } from "../inputs/MoveMetaCategorySumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MoveMetaCategoryOrderByWithAggregationInput", {})
export class MoveMetaCategoryOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCategoryCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MoveMetaCategoryCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCategoryAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MoveMetaCategoryAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCategoryMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MoveMetaCategoryMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCategoryMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MoveMetaCategoryMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCategorySumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MoveMetaCategorySumOrderByAggregateInput | undefined;
}
