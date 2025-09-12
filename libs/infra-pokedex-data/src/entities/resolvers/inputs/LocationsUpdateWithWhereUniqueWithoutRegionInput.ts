import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationsUpdateWithoutRegionInput } from "../inputs/LocationsUpdateWithoutRegionInput";
import { LocationsWhereUniqueInput } from "../inputs/LocationsWhereUniqueInput";

@TypeGraphQL.InputType("LocationsUpdateWithWhereUniqueWithoutRegionInput", {})
export class LocationsUpdateWithWhereUniqueWithoutRegionInput {
  @TypeGraphQL.Field(_type => LocationsWhereUniqueInput, {
    nullable: false
  })
  where!: LocationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationsUpdateWithoutRegionInput, {
    nullable: false
  })
  data!: LocationsUpdateWithoutRegionInput;
}
