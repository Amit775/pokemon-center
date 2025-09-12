import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRatesCreateManyLocationAreaInputEnvelope } from "../inputs/LocationAreaEncounterRatesCreateManyLocationAreaInputEnvelope";
import { LocationAreaEncounterRatesCreateOrConnectWithoutLocationAreaInput } from "../inputs/LocationAreaEncounterRatesCreateOrConnectWithoutLocationAreaInput";
import { LocationAreaEncounterRatesCreateWithoutLocationAreaInput } from "../inputs/LocationAreaEncounterRatesCreateWithoutLocationAreaInput";
import { LocationAreaEncounterRatesWhereUniqueInput } from "../inputs/LocationAreaEncounterRatesWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreaEncounterRatesCreateNestedManyWithoutLocationAreaInput", {})
export class LocationAreaEncounterRatesCreateNestedManyWithoutLocationAreaInput {
  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesCreateWithoutLocationAreaInput], {
    nullable: true
  })
  create?: LocationAreaEncounterRatesCreateWithoutLocationAreaInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesCreateOrConnectWithoutLocationAreaInput], {
    nullable: true
  })
  connectOrCreate?: LocationAreaEncounterRatesCreateOrConnectWithoutLocationAreaInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesCreateManyLocationAreaInputEnvelope, {
    nullable: true
  })
  createMany?: LocationAreaEncounterRatesCreateManyLocationAreaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesWhereUniqueInput], {
    nullable: true
  })
  connect?: LocationAreaEncounterRatesWhereUniqueInput[] | undefined;
}
