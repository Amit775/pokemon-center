import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("TypeGameIndicesScalarWhereWithAggregatesInput", {})
export class TypeGameIndicesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TypeGameIndicesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TypeGameIndicesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndicesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TypeGameIndicesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndicesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TypeGameIndicesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  type_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  generation_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  game_index?: IntWithAggregatesFilter | undefined;
}
