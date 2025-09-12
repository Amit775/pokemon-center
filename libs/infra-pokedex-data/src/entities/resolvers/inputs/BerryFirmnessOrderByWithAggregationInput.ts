import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFirmnessAvgOrderByAggregateInput } from "../inputs/BerryFirmnessAvgOrderByAggregateInput";
import { BerryFirmnessCountOrderByAggregateInput } from "../inputs/BerryFirmnessCountOrderByAggregateInput";
import { BerryFirmnessMaxOrderByAggregateInput } from "../inputs/BerryFirmnessMaxOrderByAggregateInput";
import { BerryFirmnessMinOrderByAggregateInput } from "../inputs/BerryFirmnessMinOrderByAggregateInput";
import { BerryFirmnessSumOrderByAggregateInput } from "../inputs/BerryFirmnessSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BerryFirmnessOrderByWithAggregationInput", {})
export class BerryFirmnessOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BerryFirmnessCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: BerryFirmnessCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BerryFirmnessAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: BerryFirmnessAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BerryFirmnessMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: BerryFirmnessMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BerryFirmnessMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: BerryFirmnessMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BerryFirmnessSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: BerryFirmnessSumOrderByAggregateInput | undefined;
}
