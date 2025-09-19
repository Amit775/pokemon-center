import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("GenderScalarWhereWithAggregatesInput", {})
export class GenderScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [GenderScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: GenderScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenderScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: GenderScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenderScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: GenderScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
