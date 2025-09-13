import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationsWhereInput } from "../inputs/LocationsWhereInput";

@TypeGraphQL.InputType("LocationsNullableRelationFilter", {})
export class LocationsNullableRelationFilter {
  @TypeGraphQL.Field(_type => LocationsWhereInput, {
    nullable: true
  })
  is?: LocationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationsWhereInput, {
    nullable: true
  })
  isNot?: LocationsWhereInput | undefined;
}
