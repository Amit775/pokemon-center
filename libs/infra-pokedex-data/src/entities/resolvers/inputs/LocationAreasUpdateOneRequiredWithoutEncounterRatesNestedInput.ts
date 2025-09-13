import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreasCreateOrConnectWithoutEncounterRatesInput } from "../inputs/LocationAreasCreateOrConnectWithoutEncounterRatesInput";
import { LocationAreasCreateWithoutEncounterRatesInput } from "../inputs/LocationAreasCreateWithoutEncounterRatesInput";
import { LocationAreasUpdateToOneWithWhereWithoutEncounterRatesInput } from "../inputs/LocationAreasUpdateToOneWithWhereWithoutEncounterRatesInput";
import { LocationAreasUpsertWithoutEncounterRatesInput } from "../inputs/LocationAreasUpsertWithoutEncounterRatesInput";
import { LocationAreasWhereUniqueInput } from "../inputs/LocationAreasWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreasUpdateOneRequiredWithoutEncounterRatesNestedInput", {})
export class LocationAreasUpdateOneRequiredWithoutEncounterRatesNestedInput {
  @TypeGraphQL.Field(_type => LocationAreasCreateWithoutEncounterRatesInput, {
    nullable: true
  })
  create?: LocationAreasCreateWithoutEncounterRatesInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreasCreateOrConnectWithoutEncounterRatesInput, {
    nullable: true
  })
  connectOrCreate?: LocationAreasCreateOrConnectWithoutEncounterRatesInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreasUpsertWithoutEncounterRatesInput, {
    nullable: true
  })
  upsert?: LocationAreasUpsertWithoutEncounterRatesInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreasWhereUniqueInput, {
    nullable: true
  })
  connect?: LocationAreasWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreasUpdateToOneWithWhereWithoutEncounterRatesInput, {
    nullable: true
  })
  update?: LocationAreasUpdateToOneWithWhereWithoutEncounterRatesInput | undefined;
}
