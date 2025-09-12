import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MoveFlagsScalarWhereWithAggregatesInput", {})
export class MoveFlagsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MoveFlagsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MoveFlagsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MoveFlagsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MoveFlagsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
