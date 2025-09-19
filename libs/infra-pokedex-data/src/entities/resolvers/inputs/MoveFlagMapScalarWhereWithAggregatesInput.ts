import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("MoveFlagMapScalarWhereWithAggregatesInput", {})
export class MoveFlagMapScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MoveFlagMapScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MoveFlagMapScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagMapScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MoveFlagMapScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagMapScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MoveFlagMapScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  move_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  move_flag_id?: IntWithAggregatesFilter | undefined;
}
