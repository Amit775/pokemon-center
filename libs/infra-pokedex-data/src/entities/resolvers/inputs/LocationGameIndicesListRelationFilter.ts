import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationGameIndicesWhereInput } from "../inputs/LocationGameIndicesWhereInput";

@TypeGraphQL.InputType("LocationGameIndicesListRelationFilter", {})
export class LocationGameIndicesListRelationFilter {
  @TypeGraphQL.Field(_type => LocationGameIndicesWhereInput, {
    nullable: true
  })
  every?: LocationGameIndicesWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndicesWhereInput, {
    nullable: true
  })
  some?: LocationGameIndicesWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndicesWhereInput, {
    nullable: true
  })
  none?: LocationGameIndicesWhereInput | undefined;
}
