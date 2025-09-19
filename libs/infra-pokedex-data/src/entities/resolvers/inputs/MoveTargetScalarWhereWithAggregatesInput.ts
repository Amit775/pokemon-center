import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MoveTargetScalarWhereWithAggregatesInput", {})
export class MoveTargetScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MoveTargetScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MoveTargetScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveTargetScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MoveTargetScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveTargetScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MoveTargetScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
