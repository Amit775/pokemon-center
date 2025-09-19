import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("TypeGameIndexScalarWhereWithAggregatesInput", {})
export class TypeGameIndexScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TypeGameIndexScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TypeGameIndexScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndexScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TypeGameIndexScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndexScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TypeGameIndexScalarWhereWithAggregatesInput[] | undefined;

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
