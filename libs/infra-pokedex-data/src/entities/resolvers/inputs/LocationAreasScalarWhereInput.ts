import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("LocationAreasScalarWhereInput", {})
export class LocationAreasScalarWhereInput {
  @TypeGraphQL.Field(_type => [LocationAreasScalarWhereInput], {
    nullable: true
  })
  AND?: LocationAreasScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreasScalarWhereInput], {
    nullable: true
  })
  OR?: LocationAreasScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreasScalarWhereInput], {
    nullable: true
  })
  NOT?: LocationAreasScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  location_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  game_index?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  identifier?: StringNullableFilter | undefined;
}
