import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRatesCreateManyLocationAreaInputEnvelope } from "../inputs/LocationAreaEncounterRatesCreateManyLocationAreaInputEnvelope";
import { LocationAreaEncounterRatesCreateOrConnectWithoutLocationAreaInput } from "../inputs/LocationAreaEncounterRatesCreateOrConnectWithoutLocationAreaInput";
import { LocationAreaEncounterRatesCreateWithoutLocationAreaInput } from "../inputs/LocationAreaEncounterRatesCreateWithoutLocationAreaInput";
import { LocationAreaEncounterRatesScalarWhereInput } from "../inputs/LocationAreaEncounterRatesScalarWhereInput";
import { LocationAreaEncounterRatesUpdateManyWithWhereWithoutLocationAreaInput } from "../inputs/LocationAreaEncounterRatesUpdateManyWithWhereWithoutLocationAreaInput";
import { LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutLocationAreaInput } from "../inputs/LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutLocationAreaInput";
import { LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutLocationAreaInput } from "../inputs/LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutLocationAreaInput";
import { LocationAreaEncounterRatesWhereUniqueInput } from "../inputs/LocationAreaEncounterRatesWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreaEncounterRatesUpdateManyWithoutLocationAreaNestedInput", {})
export class LocationAreaEncounterRatesUpdateManyWithoutLocationAreaNestedInput {
  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesCreateWithoutLocationAreaInput], {
    nullable: true
  })
  create?: LocationAreaEncounterRatesCreateWithoutLocationAreaInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesCreateOrConnectWithoutLocationAreaInput], {
    nullable: true
  })
  connectOrCreate?: LocationAreaEncounterRatesCreateOrConnectWithoutLocationAreaInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutLocationAreaInput], {
    nullable: true
  })
  upsert?: LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutLocationAreaInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesCreateManyLocationAreaInputEnvelope, {
    nullable: true
  })
  createMany?: LocationAreaEncounterRatesCreateManyLocationAreaInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutLocationAreaInput], {
    nullable: true
  })
  update?: LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutLocationAreaInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesUpdateManyWithWhereWithoutLocationAreaInput], {
    nullable: true
  })
  updateMany?: LocationAreaEncounterRatesUpdateManyWithWhereWithoutLocationAreaInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LocationAreaEncounterRatesScalarWhereInput[] | undefined;
}
