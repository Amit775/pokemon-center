import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ContestTypeScalarWhereWithAggregatesInput", {})
export class ContestTypeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ContestTypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ContestTypeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestTypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ContestTypeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestTypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ContestTypeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
