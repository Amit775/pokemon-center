import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MoveBattleStyleScalarWhereWithAggregatesInput", {})
export class MoveBattleStyleScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MoveBattleStyleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MoveBattleStyleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveBattleStyleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MoveBattleStyleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveBattleStyleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MoveBattleStyleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
