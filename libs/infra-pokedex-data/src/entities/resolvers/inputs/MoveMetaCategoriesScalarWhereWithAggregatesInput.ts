import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MoveMetaCategoriesScalarWhereWithAggregatesInput", {})
export class MoveMetaCategoriesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MoveMetaCategoriesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MoveMetaCategoriesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaCategoriesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MoveMetaCategoriesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaCategoriesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MoveMetaCategoriesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
