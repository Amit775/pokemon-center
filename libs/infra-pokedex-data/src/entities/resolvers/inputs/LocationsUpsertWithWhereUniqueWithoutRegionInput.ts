import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationsCreateWithoutRegionInput } from "../inputs/LocationsCreateWithoutRegionInput";
import { LocationsUpdateWithoutRegionInput } from "../inputs/LocationsUpdateWithoutRegionInput";
import { LocationsWhereUniqueInput } from "../inputs/LocationsWhereUniqueInput";

@TypeGraphQL.InputType("LocationsUpsertWithWhereUniqueWithoutRegionInput", {})
export class LocationsUpsertWithWhereUniqueWithoutRegionInput {
  @TypeGraphQL.Field(_type => LocationsWhereUniqueInput, {
    nullable: false
  })
  where!: LocationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationsUpdateWithoutRegionInput, {
    nullable: false
  })
  update!: LocationsUpdateWithoutRegionInput;

  @TypeGraphQL.Field(_type => LocationsCreateWithoutRegionInput, {
    nullable: false
  })
  create!: LocationsCreateWithoutRegionInput;
}
