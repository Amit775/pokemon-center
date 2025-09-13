import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionsCreateOrConnectWithoutLocationAreaEncounterRatesInput } from "../inputs/VersionsCreateOrConnectWithoutLocationAreaEncounterRatesInput";
import { VersionsCreateWithoutLocationAreaEncounterRatesInput } from "../inputs/VersionsCreateWithoutLocationAreaEncounterRatesInput";
import { VersionsWhereUniqueInput } from "../inputs/VersionsWhereUniqueInput";

@TypeGraphQL.InputType("VersionsCreateNestedOneWithoutLocationAreaEncounterRatesInput", {})
export class VersionsCreateNestedOneWithoutLocationAreaEncounterRatesInput {
  @TypeGraphQL.Field(_type => VersionsCreateWithoutLocationAreaEncounterRatesInput, {
    nullable: true
  })
  create?: VersionsCreateWithoutLocationAreaEncounterRatesInput | undefined;

  @TypeGraphQL.Field(_type => VersionsCreateOrConnectWithoutLocationAreaEncounterRatesInput, {
    nullable: true
  })
  connectOrCreate?: VersionsCreateOrConnectWithoutLocationAreaEncounterRatesInput | undefined;

  @TypeGraphQL.Field(_type => VersionsWhereUniqueInput, {
    nullable: true
  })
  connect?: VersionsWhereUniqueInput | undefined;
}
