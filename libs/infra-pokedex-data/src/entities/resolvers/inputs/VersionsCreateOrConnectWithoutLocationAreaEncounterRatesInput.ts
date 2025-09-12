import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionsCreateWithoutLocationAreaEncounterRatesInput } from "../inputs/VersionsCreateWithoutLocationAreaEncounterRatesInput";
import { VersionsWhereUniqueInput } from "../inputs/VersionsWhereUniqueInput";

@TypeGraphQL.InputType("VersionsCreateOrConnectWithoutLocationAreaEncounterRatesInput", {})
export class VersionsCreateOrConnectWithoutLocationAreaEncounterRatesInput {
  @TypeGraphQL.Field(_type => VersionsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionsCreateWithoutLocationAreaEncounterRatesInput, {
    nullable: false
  })
  create!: VersionsCreateWithoutLocationAreaEncounterRatesInput;
}
