import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorsAvgOrderByAggregateInput } from "../inputs/BerryFlavorsAvgOrderByAggregateInput";
import { BerryFlavorsCountOrderByAggregateInput } from "../inputs/BerryFlavorsCountOrderByAggregateInput";
import { BerryFlavorsMaxOrderByAggregateInput } from "../inputs/BerryFlavorsMaxOrderByAggregateInput";
import { BerryFlavorsMinOrderByAggregateInput } from "../inputs/BerryFlavorsMinOrderByAggregateInput";
import { BerryFlavorsSumOrderByAggregateInput } from "../inputs/BerryFlavorsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BerryFlavorsOrderByWithAggregationInput", {})
export class BerryFlavorsOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => BerryFlavorsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: BerryFlavorsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: BerryFlavorsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: BerryFlavorsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: BerryFlavorsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: BerryFlavorsSumOrderByAggregateInput | undefined;
}
