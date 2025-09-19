import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionCreateWithoutLocationAreaEncounterRatesInput } from "../inputs/VersionCreateWithoutLocationAreaEncounterRatesInput";
import { VersionUpdateWithoutLocationAreaEncounterRatesInput } from "../inputs/VersionUpdateWithoutLocationAreaEncounterRatesInput";
import { VersionWhereInput } from "../inputs/VersionWhereInput";

@TypeGraphQL.InputType("VersionUpsertWithoutLocationAreaEncounterRatesInput", {})
export class VersionUpsertWithoutLocationAreaEncounterRatesInput {
  @TypeGraphQL.Field(_type => VersionUpdateWithoutLocationAreaEncounterRatesInput, {
    nullable: false
  })
  update!: VersionUpdateWithoutLocationAreaEncounterRatesInput;

  @TypeGraphQL.Field(_type => VersionCreateWithoutLocationAreaEncounterRatesInput, {
    nullable: false
  })
  create!: VersionCreateWithoutLocationAreaEncounterRatesInput;

  @TypeGraphQL.Field(_type => VersionWhereInput, {
    nullable: true
  })
  where?: VersionWhereInput | undefined;
}
