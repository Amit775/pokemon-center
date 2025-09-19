import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateManyRegionInputEnvelope } from "../inputs/LocationCreateManyRegionInputEnvelope";
import { LocationCreateOrConnectWithoutRegionInput } from "../inputs/LocationCreateOrConnectWithoutRegionInput";
import { LocationCreateWithoutRegionInput } from "../inputs/LocationCreateWithoutRegionInput";
import { LocationScalarWhereInput } from "../inputs/LocationScalarWhereInput";
import { LocationUpdateManyWithWhereWithoutRegionInput } from "../inputs/LocationUpdateManyWithWhereWithoutRegionInput";
import { LocationUpdateWithWhereUniqueWithoutRegionInput } from "../inputs/LocationUpdateWithWhereUniqueWithoutRegionInput";
import { LocationUpsertWithWhereUniqueWithoutRegionInput } from "../inputs/LocationUpsertWithWhereUniqueWithoutRegionInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType("LocationUpdateManyWithoutRegionNestedInput", {})
export class LocationUpdateManyWithoutRegionNestedInput {
  @TypeGraphQL.Field(_type => [LocationCreateWithoutRegionInput], {
    nullable: true
  })
  create?: LocationCreateWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationCreateOrConnectWithoutRegionInput], {
    nullable: true
  })
  connectOrCreate?: LocationCreateOrConnectWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationUpsertWithWhereUniqueWithoutRegionInput], {
    nullable: true
  })
  upsert?: LocationUpsertWithWhereUniqueWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationCreateManyRegionInputEnvelope, {
    nullable: true
  })
  createMany?: LocationCreateManyRegionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LocationWhereUniqueInput], {
    nullable: true
  })
  set?: LocationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: LocationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationWhereUniqueInput], {
    nullable: true
  })
  delete?: LocationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationWhereUniqueInput], {
    nullable: true
  })
  connect?: LocationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationUpdateWithWhereUniqueWithoutRegionInput], {
    nullable: true
  })
  update?: LocationUpdateWithWhereUniqueWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationUpdateManyWithWhereWithoutRegionInput], {
    nullable: true
  })
  updateMany?: LocationUpdateManyWithWhereWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LocationScalarWhereInput[] | undefined;
}
