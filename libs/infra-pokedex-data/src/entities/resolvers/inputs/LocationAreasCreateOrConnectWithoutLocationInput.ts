import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreasCreateWithoutLocationInput } from "../inputs/LocationAreasCreateWithoutLocationInput";
import { LocationAreasWhereUniqueInput } from "../inputs/LocationAreasWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreasCreateOrConnectWithoutLocationInput", {})
export class LocationAreasCreateOrConnectWithoutLocationInput {
  @TypeGraphQL.Field(_type => LocationAreasWhereUniqueInput, {
    nullable: false
  })
  where!: LocationAreasWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationAreasCreateWithoutLocationInput, {
    nullable: false
  })
  create!: LocationAreasCreateWithoutLocationInput;
}
