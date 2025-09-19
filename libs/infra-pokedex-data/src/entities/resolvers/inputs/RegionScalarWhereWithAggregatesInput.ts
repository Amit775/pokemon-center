import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("RegionScalarWhereWithAggregatesInput", {})
export class RegionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [RegionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: RegionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RegionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: RegionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RegionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: RegionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
