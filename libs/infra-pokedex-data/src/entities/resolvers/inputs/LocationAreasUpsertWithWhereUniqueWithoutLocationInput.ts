import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreasCreateWithoutLocationInput } from "../inputs/LocationAreasCreateWithoutLocationInput";
import { LocationAreasUpdateWithoutLocationInput } from "../inputs/LocationAreasUpdateWithoutLocationInput";
import { LocationAreasWhereUniqueInput } from "../inputs/LocationAreasWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreasUpsertWithWhereUniqueWithoutLocationInput", {})
export class LocationAreasUpsertWithWhereUniqueWithoutLocationInput {
  @TypeGraphQL.Field(_type => LocationAreasWhereUniqueInput, {
    nullable: false
  })
  where!: LocationAreasWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationAreasUpdateWithoutLocationInput, {
    nullable: false
  })
  update!: LocationAreasUpdateWithoutLocationInput;

  @TypeGraphQL.Field(_type => LocationAreasCreateWithoutLocationInput, {
    nullable: false
  })
  create!: LocationAreasCreateWithoutLocationInput;
}
