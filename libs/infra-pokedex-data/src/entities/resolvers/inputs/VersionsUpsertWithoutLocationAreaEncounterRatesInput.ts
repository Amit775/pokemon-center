import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionsCreateWithoutLocationAreaEncounterRatesInput } from "../inputs/VersionsCreateWithoutLocationAreaEncounterRatesInput";
import { VersionsUpdateWithoutLocationAreaEncounterRatesInput } from "../inputs/VersionsUpdateWithoutLocationAreaEncounterRatesInput";
import { VersionsWhereInput } from "../inputs/VersionsWhereInput";

@TypeGraphQL.InputType("VersionsUpsertWithoutLocationAreaEncounterRatesInput", {})
export class VersionsUpsertWithoutLocationAreaEncounterRatesInput {
  @TypeGraphQL.Field(_type => VersionsUpdateWithoutLocationAreaEncounterRatesInput, {
    nullable: false
  })
  update!: VersionsUpdateWithoutLocationAreaEncounterRatesInput;

  @TypeGraphQL.Field(_type => VersionsCreateWithoutLocationAreaEncounterRatesInput, {
    nullable: false
  })
  create!: VersionsCreateWithoutLocationAreaEncounterRatesInput;

  @TypeGraphQL.Field(_type => VersionsWhereInput, {
    nullable: true
  })
  where?: VersionsWhereInput | undefined;
}
