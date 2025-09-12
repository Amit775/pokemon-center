import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRatesWhereInput } from "../inputs/LocationAreaEncounterRatesWhereInput";

@TypeGraphQL.InputType("LocationAreaEncounterRatesListRelationFilter", {})
export class LocationAreaEncounterRatesListRelationFilter {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesWhereInput, {
    nullable: true
  })
  every?: LocationAreaEncounterRatesWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesWhereInput, {
    nullable: true
  })
  some?: LocationAreaEncounterRatesWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesWhereInput, {
    nullable: true
  })
  none?: LocationAreaEncounterRatesWhereInput | undefined;
}
