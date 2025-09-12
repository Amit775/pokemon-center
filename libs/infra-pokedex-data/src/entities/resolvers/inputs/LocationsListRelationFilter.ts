import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationsWhereInput } from "../inputs/LocationsWhereInput";

@TypeGraphQL.InputType("LocationsListRelationFilter", {})
export class LocationsListRelationFilter {
  @TypeGraphQL.Field(_type => LocationsWhereInput, {
    nullable: true
  })
  every?: LocationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationsWhereInput, {
    nullable: true
  })
  some?: LocationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationsWhereInput, {
    nullable: true
  })
  none?: LocationsWhereInput | undefined;
}
