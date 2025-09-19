import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaWhereInput } from "../inputs/LocationAreaWhereInput";

@TypeGraphQL.InputType("LocationAreaRelationFilter", {})
export class LocationAreaRelationFilter {
  @TypeGraphQL.Field(_type => LocationAreaWhereInput, {
    nullable: true
  })
  is?: LocationAreaWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaWhereInput, {
    nullable: true
  })
  isNot?: LocationAreaWhereInput | undefined;
}
