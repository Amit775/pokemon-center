import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CharacteristicAvgOrderByAggregateInput } from "../inputs/CharacteristicAvgOrderByAggregateInput";
import { CharacteristicCountOrderByAggregateInput } from "../inputs/CharacteristicCountOrderByAggregateInput";
import { CharacteristicMaxOrderByAggregateInput } from "../inputs/CharacteristicMaxOrderByAggregateInput";
import { CharacteristicMinOrderByAggregateInput } from "../inputs/CharacteristicMinOrderByAggregateInput";
import { CharacteristicSumOrderByAggregateInput } from "../inputs/CharacteristicSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CharacteristicOrderByWithAggregationInput", {})
export class CharacteristicOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => CharacteristicCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CharacteristicCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CharacteristicAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CharacteristicAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CharacteristicMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CharacteristicMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CharacteristicMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CharacteristicMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CharacteristicSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CharacteristicSumOrderByAggregateInput | undefined;
}
