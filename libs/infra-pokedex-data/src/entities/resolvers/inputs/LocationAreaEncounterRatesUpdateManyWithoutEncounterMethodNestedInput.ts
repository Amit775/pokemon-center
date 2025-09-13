import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRatesCreateManyEncounterMethodInputEnvelope } from "../inputs/LocationAreaEncounterRatesCreateManyEncounterMethodInputEnvelope";
import { LocationAreaEncounterRatesCreateOrConnectWithoutEncounterMethodInput } from "../inputs/LocationAreaEncounterRatesCreateOrConnectWithoutEncounterMethodInput";
import { LocationAreaEncounterRatesCreateWithoutEncounterMethodInput } from "../inputs/LocationAreaEncounterRatesCreateWithoutEncounterMethodInput";
import { LocationAreaEncounterRatesScalarWhereInput } from "../inputs/LocationAreaEncounterRatesScalarWhereInput";
import { LocationAreaEncounterRatesUpdateManyWithWhereWithoutEncounterMethodInput } from "../inputs/LocationAreaEncounterRatesUpdateManyWithWhereWithoutEncounterMethodInput";
import { LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutEncounterMethodInput } from "../inputs/LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutEncounterMethodInput";
import { LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutEncounterMethodInput } from "../inputs/LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutEncounterMethodInput";
import { LocationAreaEncounterRatesWhereUniqueInput } from "../inputs/LocationAreaEncounterRatesWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreaEncounterRatesUpdateManyWithoutEncounterMethodNestedInput", {})
export class LocationAreaEncounterRatesUpdateManyWithoutEncounterMethodNestedInput {
  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesCreateWithoutEncounterMethodInput], {
    nullable: true
  })
  create?: LocationAreaEncounterRatesCreateWithoutEncounterMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesCreateOrConnectWithoutEncounterMethodInput], {
    nullable: true
  })
  connectOrCreate?: LocationAreaEncounterRatesCreateOrConnectWithoutEncounterMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutEncounterMethodInput], {
    nullable: true
  })
  upsert?: LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutEncounterMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesCreateManyEncounterMethodInputEnvelope, {
    nullable: true
  })
  createMany?: LocationAreaEncounterRatesCreateManyEncounterMethodInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesWhereUniqueInput], {
    nullable: true
  })
  set?: LocationAreaEncounterRatesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: LocationAreaEncounterRatesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesWhereUniqueInput], {
    nullable: true
  })
  delete?: LocationAreaEncounterRatesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesWhereUniqueInput], {
    nullable: true
  })
  connect?: LocationAreaEncounterRatesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutEncounterMethodInput], {
    nullable: true
  })
  update?: LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutEncounterMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesUpdateManyWithWhereWithoutEncounterMethodInput], {
    nullable: true
  })
  updateMany?: LocationAreaEncounterRatesUpdateManyWithWhereWithoutEncounterMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LocationAreaEncounterRatesScalarWhereInput[] | undefined;
}
