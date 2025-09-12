import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreasCreateWithoutEncountersInput } from "../inputs/LocationAreasCreateWithoutEncountersInput";
import { LocationAreasWhereUniqueInput } from "../inputs/LocationAreasWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreasCreateOrConnectWithoutEncountersInput", {})
export class LocationAreasCreateOrConnectWithoutEncountersInput {
  @TypeGraphQL.Field(_type => LocationAreasWhereUniqueInput, {
    nullable: false
  })
  where!: LocationAreasWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationAreasCreateWithoutEncountersInput, {
    nullable: false
  })
  create!: LocationAreasCreateWithoutEncountersInput;
}
