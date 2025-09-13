import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("TypeEfficacyScalarWhereWithAggregatesInput", {})
export class TypeEfficacyScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TypeEfficacyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TypeEfficacyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeEfficacyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TypeEfficacyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeEfficacyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TypeEfficacyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  damage_type_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  target_type_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  damage_factor?: IntWithAggregatesFilter | undefined;
}
