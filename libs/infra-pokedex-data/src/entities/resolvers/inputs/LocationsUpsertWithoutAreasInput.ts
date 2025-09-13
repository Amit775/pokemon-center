import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationsCreateWithoutAreasInput } from "../inputs/LocationsCreateWithoutAreasInput";
import { LocationsUpdateWithoutAreasInput } from "../inputs/LocationsUpdateWithoutAreasInput";
import { LocationsWhereInput } from "../inputs/LocationsWhereInput";

@TypeGraphQL.InputType("LocationsUpsertWithoutAreasInput", {})
export class LocationsUpsertWithoutAreasInput {
  @TypeGraphQL.Field(_type => LocationsUpdateWithoutAreasInput, {
    nullable: false
  })
  update!: LocationsUpdateWithoutAreasInput;

  @TypeGraphQL.Field(_type => LocationsCreateWithoutAreasInput, {
    nullable: false
  })
  create!: LocationsCreateWithoutAreasInput;

  @TypeGraphQL.Field(_type => LocationsWhereInput, {
    nullable: true
  })
  where?: LocationsWhereInput | undefined;
}
