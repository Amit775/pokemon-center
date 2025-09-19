import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ItemScalarWhereInput", {})
export class ItemScalarWhereInput {
  @TypeGraphQL.Field(_type => [ItemScalarWhereInput], {
    nullable: true
  })
  AND?: ItemScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemScalarWhereInput], {
    nullable: true
  })
  OR?: ItemScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemScalarWhereInput], {
    nullable: true
  })
  NOT?: ItemScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  category_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  cost?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  fling_power?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  fling_effect_id?: IntNullableFilter | undefined;
}
