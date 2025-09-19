import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationUpdateWithoutRegionInput } from "../inputs/LocationUpdateWithoutRegionInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType("LocationUpdateWithWhereUniqueWithoutRegionInput", {})
export class LocationUpdateWithWhereUniqueWithoutRegionInput {
  @TypeGraphQL.Field(_type => LocationWhereUniqueInput, {
    nullable: false
  })
  where!: LocationWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationUpdateWithoutRegionInput, {
    nullable: false
  })
  data!: LocationUpdateWithoutRegionInput;
}
