import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ContestTypesScalarWhereWithAggregatesInput", {})
export class ContestTypesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ContestTypesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ContestTypesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestTypesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ContestTypesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestTypesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ContestTypesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
