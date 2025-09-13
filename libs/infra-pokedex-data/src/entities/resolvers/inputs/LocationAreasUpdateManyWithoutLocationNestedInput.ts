import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreasCreateManyLocationInputEnvelope } from "../inputs/LocationAreasCreateManyLocationInputEnvelope";
import { LocationAreasCreateOrConnectWithoutLocationInput } from "../inputs/LocationAreasCreateOrConnectWithoutLocationInput";
import { LocationAreasCreateWithoutLocationInput } from "../inputs/LocationAreasCreateWithoutLocationInput";
import { LocationAreasScalarWhereInput } from "../inputs/LocationAreasScalarWhereInput";
import { LocationAreasUpdateManyWithWhereWithoutLocationInput } from "../inputs/LocationAreasUpdateManyWithWhereWithoutLocationInput";
import { LocationAreasUpdateWithWhereUniqueWithoutLocationInput } from "../inputs/LocationAreasUpdateWithWhereUniqueWithoutLocationInput";
import { LocationAreasUpsertWithWhereUniqueWithoutLocationInput } from "../inputs/LocationAreasUpsertWithWhereUniqueWithoutLocationInput";
import { LocationAreasWhereUniqueInput } from "../inputs/LocationAreasWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreasUpdateManyWithoutLocationNestedInput", {})
export class LocationAreasUpdateManyWithoutLocationNestedInput {
  @TypeGraphQL.Field(_type => [LocationAreasCreateWithoutLocationInput], {
    nullable: true
  })
  create?: LocationAreasCreateWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreasCreateOrConnectWithoutLocationInput], {
    nullable: true
  })
  connectOrCreate?: LocationAreasCreateOrConnectWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreasUpsertWithWhereUniqueWithoutLocationInput], {
    nullable: true
  })
  upsert?: LocationAreasUpsertWithWhereUniqueWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationAreasCreateManyLocationInputEnvelope, {
    nullable: true
  })
  createMany?: LocationAreasCreateManyLocationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LocationAreasWhereUniqueInput], {
    nullable: true
  })
  set?: LocationAreasWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreasWhereUniqueInput], {
    nullable: true
  })
  disconnect?: LocationAreasWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreasWhereUniqueInput], {
    nullable: true
  })
  delete?: LocationAreasWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreasWhereUniqueInput], {
    nullable: true
  })
  connect?: LocationAreasWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreasUpdateWithWhereUniqueWithoutLocationInput], {
    nullable: true
  })
  update?: LocationAreasUpdateWithWhereUniqueWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreasUpdateManyWithWhereWithoutLocationInput], {
    nullable: true
  })
  updateMany?: LocationAreasUpdateManyWithWhereWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreasScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LocationAreasScalarWhereInput[] | undefined;
}
