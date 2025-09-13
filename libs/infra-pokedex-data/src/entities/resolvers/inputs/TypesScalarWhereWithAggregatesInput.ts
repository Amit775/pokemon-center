import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("TypesScalarWhereWithAggregatesInput", {})
export class TypesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TypesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TypesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TypesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TypesScalarWhereWithAggregatesInput[] | undefined;

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
