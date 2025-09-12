import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MoveTargetsScalarWhereWithAggregatesInput", {})
export class MoveTargetsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MoveTargetsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MoveTargetsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveTargetsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MoveTargetsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveTargetsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MoveTargetsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
