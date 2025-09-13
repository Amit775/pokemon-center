import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MoveBattleStylesScalarWhereWithAggregatesInput", {})
export class MoveBattleStylesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MoveBattleStylesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MoveBattleStylesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveBattleStylesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MoveBattleStylesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveBattleStylesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MoveBattleStylesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
