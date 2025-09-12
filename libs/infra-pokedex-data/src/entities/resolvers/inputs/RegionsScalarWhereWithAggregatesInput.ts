import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("RegionsScalarWhereWithAggregatesInput", {})
export class RegionsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [RegionsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: RegionsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RegionsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: RegionsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RegionsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: RegionsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
