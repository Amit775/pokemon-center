import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("LocationAreaEncounterRateScalarWhereInput", {})
export class LocationAreaEncounterRateScalarWhereInput {
  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateScalarWhereInput], {
    nullable: true
  })
  AND?: LocationAreaEncounterRateScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateScalarWhereInput], {
    nullable: true
  })
  OR?: LocationAreaEncounterRateScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateScalarWhereInput], {
    nullable: true
  })
  NOT?: LocationAreaEncounterRateScalarWhereInput[] | undefined;

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
