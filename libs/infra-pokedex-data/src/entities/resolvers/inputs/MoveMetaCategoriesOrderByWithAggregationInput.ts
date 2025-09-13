import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCategoriesAvgOrderByAggregateInput } from "../inputs/MoveMetaCategoriesAvgOrderByAggregateInput";
import { MoveMetaCategoriesCountOrderByAggregateInput } from "../inputs/MoveMetaCategoriesCountOrderByAggregateInput";
import { MoveMetaCategoriesMaxOrderByAggregateInput } from "../inputs/MoveMetaCategoriesMaxOrderByAggregateInput";
import { MoveMetaCategoriesMinOrderByAggregateInput } from "../inputs/MoveMetaCategoriesMinOrderByAggregateInput";
import { MoveMetaCategoriesSumOrderByAggregateInput } from "../inputs/MoveMetaCategoriesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MoveMetaCategoriesOrderByWithAggregationInput", {})
export class MoveMetaCategoriesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCategoriesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MoveMetaCategoriesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCategoriesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MoveMetaCategoriesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCategoriesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MoveMetaCategoriesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCategoriesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MoveMetaCategoriesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCategoriesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MoveMetaCategoriesSumOrderByAggregateInput | undefined;
}
