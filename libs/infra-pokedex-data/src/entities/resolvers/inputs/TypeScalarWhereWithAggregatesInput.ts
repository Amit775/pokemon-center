import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("TypeScalarWhereWithAggregatesInput", {})
export class TypeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TypeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TypeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TypeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  generation_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  damage_class_id?: IntNullableWithAggregatesFilter | undefined;
}
