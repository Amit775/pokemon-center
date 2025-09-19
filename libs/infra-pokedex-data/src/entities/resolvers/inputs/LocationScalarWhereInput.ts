import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("LocationScalarWhereInput", {})
export class LocationScalarWhereInput {
  @TypeGraphQL.Field(_type => [LocationScalarWhereInput], {
    nullable: true
  })
  AND?: LocationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationScalarWhereInput], {
    nullable: true
  })
  OR?: LocationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationScalarWhereInput], {
    nullable: true
  })
  NOT?: LocationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  region_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;
}
