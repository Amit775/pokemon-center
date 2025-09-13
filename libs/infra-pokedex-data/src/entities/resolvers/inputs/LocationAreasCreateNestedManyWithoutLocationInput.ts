import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreasCreateManyLocationInputEnvelope } from "../inputs/LocationAreasCreateManyLocationInputEnvelope";
import { LocationAreasCreateOrConnectWithoutLocationInput } from "../inputs/LocationAreasCreateOrConnectWithoutLocationInput";
import { LocationAreasCreateWithoutLocationInput } from "../inputs/LocationAreasCreateWithoutLocationInput";
import { LocationAreasWhereUniqueInput } from "../inputs/LocationAreasWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreasCreateNestedManyWithoutLocationInput", {})
export class LocationAreasCreateNestedManyWithoutLocationInput {
  @TypeGraphQL.Field(_type => [LocationAreasCreateWithoutLocationInput], {
    nullable: true
  })
  create?: LocationAreasCreateWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreasCreateOrConnectWithoutLocationInput], {
    nullable: true
  })
  connectOrCreate?: LocationAreasCreateOrConnectWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationAreasCreateManyLocationInputEnvelope, {
    nullable: true
  })
  createMany?: LocationAreasCreateManyLocationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LocationAreasWhereUniqueInput], {
    nullable: true
  })
  connect?: LocationAreasWhereUniqueInput[] | undefined;
}
