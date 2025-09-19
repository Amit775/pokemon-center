import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationGameIndexWhereInput } from "../inputs/LocationGameIndexWhereInput";

@TypeGraphQL.InputType("LocationGameIndexListRelationFilter", {})
export class LocationGameIndexListRelationFilter {
  @TypeGraphQL.Field(_type => LocationGameIndexWhereInput, {
    nullable: true
  })
  every?: LocationGameIndexWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndexWhereInput, {
    nullable: true
  })
  some?: LocationGameIndexWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndexWhereInput, {
    nullable: true
  })
  none?: LocationGameIndexWhereInput | undefined;
}
