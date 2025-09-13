import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreasCreateWithoutEncountersInput } from "../inputs/LocationAreasCreateWithoutEncountersInput";
import { LocationAreasUpdateWithoutEncountersInput } from "../inputs/LocationAreasUpdateWithoutEncountersInput";
import { LocationAreasWhereInput } from "../inputs/LocationAreasWhereInput";

@TypeGraphQL.InputType("LocationAreasUpsertWithoutEncountersInput", {})
export class LocationAreasUpsertWithoutEncountersInput {
  @TypeGraphQL.Field(_type => LocationAreasUpdateWithoutEncountersInput, {
    nullable: false
  })
  update!: LocationAreasUpdateWithoutEncountersInput;

  @TypeGraphQL.Field(_type => LocationAreasCreateWithoutEncountersInput, {
    nullable: false
  })
  create!: LocationAreasCreateWithoutEncountersInput;

  @TypeGraphQL.Field(_type => LocationAreasWhereInput, {
    nullable: true
  })
  where?: LocationAreasWhereInput | undefined;
}
