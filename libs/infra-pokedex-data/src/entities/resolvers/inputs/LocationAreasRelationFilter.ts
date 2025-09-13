import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreasWhereInput } from "../inputs/LocationAreasWhereInput";

@TypeGraphQL.InputType("LocationAreasRelationFilter", {})
export class LocationAreasRelationFilter {
  @TypeGraphQL.Field(_type => LocationAreasWhereInput, {
    nullable: true
  })
  is?: LocationAreasWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreasWhereInput, {
    nullable: true
  })
  isNot?: LocationAreasWhereInput | undefined;
}
