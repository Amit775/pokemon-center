import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaAilmentsAvgOrderByAggregateInput } from "../inputs/MoveMetaAilmentsAvgOrderByAggregateInput";
import { MoveMetaAilmentsCountOrderByAggregateInput } from "../inputs/MoveMetaAilmentsCountOrderByAggregateInput";
import { MoveMetaAilmentsMaxOrderByAggregateInput } from "../inputs/MoveMetaAilmentsMaxOrderByAggregateInput";
import { MoveMetaAilmentsMinOrderByAggregateInput } from "../inputs/MoveMetaAilmentsMinOrderByAggregateInput";
import { MoveMetaAilmentsSumOrderByAggregateInput } from "../inputs/MoveMetaAilmentsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MoveMetaAilmentsOrderByWithAggregationInput", {})
export class MoveMetaAilmentsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAilmentsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MoveMetaAilmentsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAilmentsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MoveMetaAilmentsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAilmentsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MoveMetaAilmentsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAilmentsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MoveMetaAilmentsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAilmentsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MoveMetaAilmentsSumOrderByAggregateInput | undefined;
}
