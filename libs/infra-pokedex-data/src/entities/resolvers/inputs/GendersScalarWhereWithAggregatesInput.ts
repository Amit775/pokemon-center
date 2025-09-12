import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("GendersScalarWhereWithAggregatesInput", {})
export class GendersScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [GendersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: GendersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GendersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: GendersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GendersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: GendersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
