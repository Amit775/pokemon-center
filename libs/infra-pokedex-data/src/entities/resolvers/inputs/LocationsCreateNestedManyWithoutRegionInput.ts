import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationsCreateManyRegionInputEnvelope } from "../inputs/LocationsCreateManyRegionInputEnvelope";
import { LocationsCreateOrConnectWithoutRegionInput } from "../inputs/LocationsCreateOrConnectWithoutRegionInput";
import { LocationsCreateWithoutRegionInput } from "../inputs/LocationsCreateWithoutRegionInput";
import { LocationsWhereUniqueInput } from "../inputs/LocationsWhereUniqueInput";

@TypeGraphQL.InputType("LocationsCreateNestedManyWithoutRegionInput", {})
export class LocationsCreateNestedManyWithoutRegionInput {
  @TypeGraphQL.Field(_type => [LocationsCreateWithoutRegionInput], {
    nullable: true
  })
  create?: LocationsCreateWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationsCreateOrConnectWithoutRegionInput], {
    nullable: true
  })
  connectOrCreate?: LocationsCreateOrConnectWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationsCreateManyRegionInputEnvelope, {
    nullable: true
  })
  createMany?: LocationsCreateManyRegionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LocationsWhereUniqueInput], {
    nullable: true
  })
  connect?: LocationsWhereUniqueInput[] | undefined;
}
