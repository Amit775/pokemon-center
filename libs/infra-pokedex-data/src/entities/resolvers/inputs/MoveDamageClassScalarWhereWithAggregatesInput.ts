import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MoveDamageClassScalarWhereWithAggregatesInput", {})
export class MoveDamageClassScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MoveDamageClassScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MoveDamageClassScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveDamageClassScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MoveDamageClassScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveDamageClassScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MoveDamageClassScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
