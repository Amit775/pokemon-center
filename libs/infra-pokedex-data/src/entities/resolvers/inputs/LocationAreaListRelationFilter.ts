import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaWhereInput } from "../inputs/LocationAreaWhereInput";

@TypeGraphQL.InputType("LocationAreaListRelationFilter", {})
export class LocationAreaListRelationFilter {
  @TypeGraphQL.Field(_type => LocationAreaWhereInput, {
    nullable: true
  })
  every?: LocationAreaWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaWhereInput, {
    nullable: true
  })
  some?: LocationAreaWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaWhereInput, {
    nullable: true
  })
  none?: LocationAreaWhereInput | undefined;
}
