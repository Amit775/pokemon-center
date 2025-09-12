import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguagesAvgOrderByAggregateInput } from "../inputs/LanguagesAvgOrderByAggregateInput";
import { LanguagesCountOrderByAggregateInput } from "../inputs/LanguagesCountOrderByAggregateInput";
import { LanguagesMaxOrderByAggregateInput } from "../inputs/LanguagesMaxOrderByAggregateInput";
import { LanguagesMinOrderByAggregateInput } from "../inputs/LanguagesMinOrderByAggregateInput";
import { LanguagesSumOrderByAggregateInput } from "../inputs/LanguagesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("LanguagesOrderByWithAggregationInput", {})
export class LanguagesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  iso639?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  iso3166?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  official?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => LanguagesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: LanguagesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LanguagesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: LanguagesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LanguagesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: LanguagesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LanguagesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: LanguagesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LanguagesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: LanguagesSumOrderByAggregateInput | undefined;
}
