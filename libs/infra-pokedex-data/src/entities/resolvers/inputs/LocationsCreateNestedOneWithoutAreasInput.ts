import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationsCreateOrConnectWithoutAreasInput } from "../inputs/LocationsCreateOrConnectWithoutAreasInput";
import { LocationsCreateWithoutAreasInput } from "../inputs/LocationsCreateWithoutAreasInput";
import { LocationsWhereUniqueInput } from "../inputs/LocationsWhereUniqueInput";

@TypeGraphQL.InputType("LocationsCreateNestedOneWithoutAreasInput", {})
export class LocationsCreateNestedOneWithoutAreasInput {
  @TypeGraphQL.Field(_type => LocationsCreateWithoutAreasInput, {
    nullable: true
  })
  create?: LocationsCreateWithoutAreasInput | undefined;

  @TypeGraphQL.Field(_type => LocationsCreateOrConnectWithoutAreasInput, {
    nullable: true
  })
  connectOrCreate?: LocationsCreateOrConnectWithoutAreasInput | undefined;

  @TypeGraphQL.Field(_type => LocationsWhereUniqueInput, {
    nullable: true
  })
  connect?: LocationsWhereUniqueInput | undefined;
}
