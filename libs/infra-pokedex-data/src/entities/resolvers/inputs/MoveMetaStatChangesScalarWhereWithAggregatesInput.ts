import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("MoveMetaStatChangesScalarWhereWithAggregatesInput", {})
export class MoveMetaStatChangesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MoveMetaStatChangesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MoveMetaStatChangesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaStatChangesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MoveMetaStatChangesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaStatChangesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MoveMetaStatChangesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  move_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  stat_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  change?: IntWithAggregatesFilter | undefined;
}
