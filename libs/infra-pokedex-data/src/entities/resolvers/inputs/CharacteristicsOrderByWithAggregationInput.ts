import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CharacteristicsAvgOrderByAggregateInput } from "../inputs/CharacteristicsAvgOrderByAggregateInput";
import { CharacteristicsCountOrderByAggregateInput } from "../inputs/CharacteristicsCountOrderByAggregateInput";
import { CharacteristicsMaxOrderByAggregateInput } from "../inputs/CharacteristicsMaxOrderByAggregateInput";
import { CharacteristicsMinOrderByAggregateInput } from "../inputs/CharacteristicsMinOrderByAggregateInput";
import { CharacteristicsSumOrderByAggregateInput } from "../inputs/CharacteristicsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CharacteristicsOrderByWithAggregationInput", {})
export class CharacteristicsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  stat_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  gene_mod_5?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CharacteristicsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CharacteristicsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CharacteristicsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CharacteristicsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CharacteristicsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CharacteristicsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CharacteristicsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CharacteristicsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CharacteristicsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CharacteristicsSumOrderByAggregateInput | undefined;
}
