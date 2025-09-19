import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRateWhereInput } from "../inputs/LocationAreaEncounterRateWhereInput";

@TypeGraphQL.InputType("LocationAreaEncounterRateListRelationFilter", {})
export class LocationAreaEncounterRateListRelationFilter {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRateWhereInput, {
    nullable: true
  })
  every?: LocationAreaEncounterRateWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateWhereInput, {
    nullable: true
  })
  some?: LocationAreaEncounterRateWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateWhereInput, {
    nullable: true
  })
  none?: LocationAreaEncounterRateWhereInput | undefined;
}
