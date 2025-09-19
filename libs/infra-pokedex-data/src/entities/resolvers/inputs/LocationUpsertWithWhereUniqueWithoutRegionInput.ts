import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateWithoutRegionInput } from "../inputs/LocationCreateWithoutRegionInput";
import { LocationUpdateWithoutRegionInput } from "../inputs/LocationUpdateWithoutRegionInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType("LocationUpsertWithWhereUniqueWithoutRegionInput", {})
export class LocationUpsertWithWhereUniqueWithoutRegionInput {
  @TypeGraphQL.Field(_type => LocationWhereUniqueInput, {
    nullable: false
  })
  where!: LocationWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationUpdateWithoutRegionInput, {
    nullable: false
  })
  update!: LocationUpdateWithoutRegionInput;

  @TypeGraphQL.Field(_type => LocationCreateWithoutRegionInput, {
    nullable: false
  })
  create!: LocationCreateWithoutRegionInput;
}
