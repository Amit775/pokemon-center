import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MoveMetaAilmentScalarWhereWithAggregatesInput", {})
export class MoveMetaAilmentScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MoveMetaAilmentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MoveMetaAilmentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaAilmentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MoveMetaAilmentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaAilmentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MoveMetaAilmentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
