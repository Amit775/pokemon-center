import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationsCreateWithoutAreasInput } from "../inputs/LocationsCreateWithoutAreasInput";
import { LocationsWhereUniqueInput } from "../inputs/LocationsWhereUniqueInput";

@TypeGraphQL.InputType("LocationsCreateOrConnectWithoutAreasInput", {})
export class LocationsCreateOrConnectWithoutAreasInput {
  @TypeGraphQL.Field(_type => LocationsWhereUniqueInput, {
    nullable: false
  })
  where!: LocationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationsCreateWithoutAreasInput, {
    nullable: false
  })
  create!: LocationsCreateWithoutAreasInput;
}
