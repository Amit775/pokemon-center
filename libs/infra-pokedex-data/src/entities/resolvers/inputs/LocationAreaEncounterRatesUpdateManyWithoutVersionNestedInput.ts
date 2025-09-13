import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRatesCreateManyVersionInputEnvelope } from "../inputs/LocationAreaEncounterRatesCreateManyVersionInputEnvelope";
import { LocationAreaEncounterRatesCreateOrConnectWithoutVersionInput } from "../inputs/LocationAreaEncounterRatesCreateOrConnectWithoutVersionInput";
import { LocationAreaEncounterRatesCreateWithoutVersionInput } from "../inputs/LocationAreaEncounterRatesCreateWithoutVersionInput";
import { LocationAreaEncounterRatesScalarWhereInput } from "../inputs/LocationAreaEncounterRatesScalarWhereInput";
import { LocationAreaEncounterRatesUpdateManyWithWhereWithoutVersionInput } from "../inputs/LocationAreaEncounterRatesUpdateManyWithWhereWithoutVersionInput";
import { LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutVersionInput } from "../inputs/LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutVersionInput";
import { LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutVersionInput } from "../inputs/LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutVersionInput";
import { LocationAreaEncounterRatesWhereUniqueInput } from "../inputs/LocationAreaEncounterRatesWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreaEncounterRatesUpdateManyWithoutVersionNestedInput", {})
export class LocationAreaEncounterRatesUpdateManyWithoutVersionNestedInput {
  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesCreateWithoutVersionInput], {
    nullable: true
  })
  create?: LocationAreaEncounterRatesCreateWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesCreateOrConnectWithoutVersionInput], {
    nullable: true
  })
  connectOrCreate?: LocationAreaEncounterRatesCreateOrConnectWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutVersionInput], {
    nullable: true
  })
  upsert?: LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesCreateManyVersionInputEnvelope, {
    nullable: true
  })
  createMany?: LocationAreaEncounterRatesCreateManyVersionInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutVersionInput], {
    nullable: true
  })
  update?: LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesUpdateManyWithWhereWithoutVersionInput], {
    nullable: true
  })
  updateMany?: LocationAreaEncounterRatesUpdateManyWithWhereWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LocationAreaEncounterRatesScalarWhereInput[] | undefined;
}
