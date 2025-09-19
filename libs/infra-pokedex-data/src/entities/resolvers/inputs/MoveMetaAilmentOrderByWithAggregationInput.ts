import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaAilmentAvgOrderByAggregateInput } from "../inputs/MoveMetaAilmentAvgOrderByAggregateInput";
import { MoveMetaAilmentCountOrderByAggregateInput } from "../inputs/MoveMetaAilmentCountOrderByAggregateInput";
import { MoveMetaAilmentMaxOrderByAggregateInput } from "../inputs/MoveMetaAilmentMaxOrderByAggregateInput";
import { MoveMetaAilmentMinOrderByAggregateInput } from "../inputs/MoveMetaAilmentMinOrderByAggregateInput";
import { MoveMetaAilmentSumOrderByAggregateInput } from "../inputs/MoveMetaAilmentSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MoveMetaAilmentOrderByWithAggregationInput", {})
export class MoveMetaAilmentOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAilmentCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MoveMetaAilmentCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAilmentAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MoveMetaAilmentAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAilmentMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MoveMetaAilmentMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAilmentMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MoveMetaAilmentMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAilmentSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MoveMetaAilmentSumOrderByAggregateInput | undefined;
}
