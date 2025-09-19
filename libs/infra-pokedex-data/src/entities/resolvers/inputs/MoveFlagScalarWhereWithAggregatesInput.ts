import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MoveFlagScalarWhereWithAggregatesInput", {})
export class MoveFlagScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MoveFlagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MoveFlagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MoveFlagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MoveFlagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
