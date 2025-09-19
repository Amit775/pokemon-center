import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExperienceAvgOrderByAggregateInput } from "../inputs/ExperienceAvgOrderByAggregateInput";
import { ExperienceCountOrderByAggregateInput } from "../inputs/ExperienceCountOrderByAggregateInput";
import { ExperienceMaxOrderByAggregateInput } from "../inputs/ExperienceMaxOrderByAggregateInput";
import { ExperienceMinOrderByAggregateInput } from "../inputs/ExperienceMinOrderByAggregateInput";
import { ExperienceSumOrderByAggregateInput } from "../inputs/ExperienceSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ExperienceOrderByWithAggregationInput", {})
export class ExperienceOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  growth_rate_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  level?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  experience?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ExperienceCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ExperienceCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExperienceAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ExperienceAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExperienceMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ExperienceMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExperienceMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ExperienceMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExperienceSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ExperienceSumOrderByAggregateInput | undefined;
}
