import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreasUpdateWithoutEncountersInput } from "../inputs/LocationAreasUpdateWithoutEncountersInput";
import { LocationAreasWhereInput } from "../inputs/LocationAreasWhereInput";

@TypeGraphQL.InputType("LocationAreasUpdateToOneWithWhereWithoutEncountersInput", {})
export class LocationAreasUpdateToOneWithWhereWithoutEncountersInput {
  @TypeGraphQL.Field(_type => LocationAreasWhereInput, {
    nullable: true
  })
  where?: LocationAreasWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreasUpdateWithoutEncountersInput, {
    nullable: false
  })
  data!: LocationAreasUpdateWithoutEncountersInput;
}
