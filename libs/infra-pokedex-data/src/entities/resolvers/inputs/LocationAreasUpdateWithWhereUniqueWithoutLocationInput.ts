import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreasUpdateWithoutLocationInput } from "../inputs/LocationAreasUpdateWithoutLocationInput";
import { LocationAreasWhereUniqueInput } from "../inputs/LocationAreasWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreasUpdateWithWhereUniqueWithoutLocationInput", {})
export class LocationAreasUpdateWithWhereUniqueWithoutLocationInput {
  @TypeGraphQL.Field(_type => LocationAreasWhereUniqueInput, {
    nullable: false
  })
  where!: LocationAreasWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationAreasUpdateWithoutLocationInput, {
    nullable: false
  })
  data!: LocationAreasUpdateWithoutLocationInput;
}
