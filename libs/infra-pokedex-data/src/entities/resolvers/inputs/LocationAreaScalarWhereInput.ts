import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("LocationAreaScalarWhereInput", {})
export class LocationAreaScalarWhereInput {
  @TypeGraphQL.Field(_type => [LocationAreaScalarWhereInput], {
    nullable: true
  })
  AND?: LocationAreaScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaScalarWhereInput], {
    nullable: true
  })
  OR?: LocationAreaScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaScalarWhereInput], {
    nullable: true
  })
  NOT?: LocationAreaScalarWhereInput[] | undefined;

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
