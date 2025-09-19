import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorAvgOrderByAggregateInput } from "../inputs/BerryFlavorAvgOrderByAggregateInput";
import { BerryFlavorCountOrderByAggregateInput } from "../inputs/BerryFlavorCountOrderByAggregateInput";
import { BerryFlavorMaxOrderByAggregateInput } from "../inputs/BerryFlavorMaxOrderByAggregateInput";
import { BerryFlavorMinOrderByAggregateInput } from "../inputs/BerryFlavorMinOrderByAggregateInput";
import { BerryFlavorSumOrderByAggregateInput } from "../inputs/BerryFlavorSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BerryFlavorOrderByWithAggregationInput", {})
export class BerryFlavorOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  berry_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  contest_type_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  flavor?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: BerryFlavorCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: BerryFlavorAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: BerryFlavorMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: BerryFlavorMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: BerryFlavorSumOrderByAggregateInput | undefined;
}
