import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MoveDamageClassesScalarWhereWithAggregatesInput", {})
export class MoveDamageClassesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MoveDamageClassesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MoveDamageClassesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveDamageClassesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MoveDamageClassesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveDamageClassesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MoveDamageClassesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
