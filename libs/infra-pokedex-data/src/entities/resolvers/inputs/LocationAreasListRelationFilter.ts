import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreasWhereInput } from "../inputs/LocationAreasWhereInput";

@TypeGraphQL.InputType("LocationAreasListRelationFilter", {})
export class LocationAreasListRelationFilter {
  @TypeGraphQL.Field(_type => LocationAreasWhereInput, {
    nullable: true
  })
  every?: LocationAreasWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreasWhereInput, {
    nullable: true
  })
  some?: LocationAreasWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreasWhereInput, {
    nullable: true
  })
  none?: LocationAreasWhereInput | undefined;
}
