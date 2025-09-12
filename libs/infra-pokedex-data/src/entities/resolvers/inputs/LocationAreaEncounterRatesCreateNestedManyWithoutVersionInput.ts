import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRatesCreateManyVersionInputEnvelope } from "../inputs/LocationAreaEncounterRatesCreateManyVersionInputEnvelope";
import { LocationAreaEncounterRatesCreateOrConnectWithoutVersionInput } from "../inputs/LocationAreaEncounterRatesCreateOrConnectWithoutVersionInput";
import { LocationAreaEncounterRatesCreateWithoutVersionInput } from "../inputs/LocationAreaEncounterRatesCreateWithoutVersionInput";
import { LocationAreaEncounterRatesWhereUniqueInput } from "../inputs/LocationAreaEncounterRatesWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreaEncounterRatesCreateNestedManyWithoutVersionInput", {})
export class LocationAreaEncounterRatesCreateNestedManyWithoutVersionInput {
  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesCreateWithoutVersionInput], {
    nullable: true
  })
  create?: LocationAreaEncounterRatesCreateWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesCreateOrConnectWithoutVersionInput], {
    nullable: true
  })
  connectOrCreate?: LocationAreaEncounterRatesCreateOrConnectWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesCreateManyVersionInputEnvelope, {
    nullable: true
  })
  createMany?: LocationAreaEncounterRatesCreateManyVersionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesWhereUniqueInput], {
    nullable: true
  })
  connect?: LocationAreaEncounterRatesWhereUniqueInput[] | undefined;
}
