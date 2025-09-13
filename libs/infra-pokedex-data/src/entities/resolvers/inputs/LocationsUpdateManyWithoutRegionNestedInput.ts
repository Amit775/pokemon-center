import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationsCreateManyRegionInputEnvelope } from "../inputs/LocationsCreateManyRegionInputEnvelope";
import { LocationsCreateOrConnectWithoutRegionInput } from "../inputs/LocationsCreateOrConnectWithoutRegionInput";
import { LocationsCreateWithoutRegionInput } from "../inputs/LocationsCreateWithoutRegionInput";
import { LocationsScalarWhereInput } from "../inputs/LocationsScalarWhereInput";
import { LocationsUpdateManyWithWhereWithoutRegionInput } from "../inputs/LocationsUpdateManyWithWhereWithoutRegionInput";
import { LocationsUpdateWithWhereUniqueWithoutRegionInput } from "../inputs/LocationsUpdateWithWhereUniqueWithoutRegionInput";
import { LocationsUpsertWithWhereUniqueWithoutRegionInput } from "../inputs/LocationsUpsertWithWhereUniqueWithoutRegionInput";
import { LocationsWhereUniqueInput } from "../inputs/LocationsWhereUniqueInput";

@TypeGraphQL.InputType("LocationsUpdateManyWithoutRegionNestedInput", {})
export class LocationsUpdateManyWithoutRegionNestedInput {
  @TypeGraphQL.Field(_type => [LocationsCreateWithoutRegionInput], {
    nullable: true
  })
  create?: LocationsCreateWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationsCreateOrConnectWithoutRegionInput], {
    nullable: true
  })
  connectOrCreate?: LocationsCreateOrConnectWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationsUpsertWithWhereUniqueWithoutRegionInput], {
    nullable: true
  })
  upsert?: LocationsUpsertWithWhereUniqueWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationsCreateManyRegionInputEnvelope, {
    nullable: true
  })
  createMany?: LocationsCreateManyRegionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LocationsWhereUniqueInput], {
    nullable: true
  })
  set?: LocationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: LocationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationsWhereUniqueInput], {
    nullable: true
  })
  delete?: LocationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationsWhereUniqueInput], {
    nullable: true
  })
  connect?: LocationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationsUpdateWithWhereUniqueWithoutRegionInput], {
    nullable: true
  })
  update?: LocationsUpdateWithWhereUniqueWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationsUpdateManyWithWhereWithoutRegionInput], {
    nullable: true
  })
  updateMany?: LocationsUpdateManyWithWhereWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LocationsScalarWhereInput[] | undefined;
}
