import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("LocationAreaEncounterRatesScalarWhereInput", {})
export class LocationAreaEncounterRatesScalarWhereInput {
  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesScalarWhereInput], {
    nullable: true
  })
  AND?: LocationAreaEncounterRatesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesScalarWhereInput], {
    nullable: true
  })
  OR?: LocationAreaEncounterRatesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesScalarWhereInput], {
    nullable: true
  })
  NOT?: LocationAreaEncounterRatesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  location_area_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  encounter_method_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  version_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  rate?: IntFilter | undefined;
}
