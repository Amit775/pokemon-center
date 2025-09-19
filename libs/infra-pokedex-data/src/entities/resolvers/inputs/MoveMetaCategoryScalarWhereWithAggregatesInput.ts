import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MoveMetaCategoryScalarWhereWithAggregatesInput", {})
export class MoveMetaCategoryScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MoveMetaCategoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MoveMetaCategoryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaCategoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MoveMetaCategoryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaCategoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MoveMetaCategoryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
