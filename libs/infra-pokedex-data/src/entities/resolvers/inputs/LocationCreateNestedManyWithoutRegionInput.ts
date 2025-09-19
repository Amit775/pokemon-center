import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateManyRegionInputEnvelope } from "../inputs/LocationCreateManyRegionInputEnvelope";
import { LocationCreateOrConnectWithoutRegionInput } from "../inputs/LocationCreateOrConnectWithoutRegionInput";
import { LocationCreateWithoutRegionInput } from "../inputs/LocationCreateWithoutRegionInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType("LocationCreateNestedManyWithoutRegionInput", {})
export class LocationCreateNestedManyWithoutRegionInput {
  @TypeGraphQL.Field(_type => [LocationCreateWithoutRegionInput], {
    nullable: true
  })
  create?: LocationCreateWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationCreateOrConnectWithoutRegionInput], {
    nullable: true
  })
  connectOrCreate?: LocationCreateOrConnectWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationCreateManyRegionInputEnvelope, {
    nullable: true
  })
  createMany?: LocationCreateManyRegionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LocationWhereUniqueInput], {
    nullable: true
  })
  connect?: LocationWhereUniqueInput[] | undefined;
}
