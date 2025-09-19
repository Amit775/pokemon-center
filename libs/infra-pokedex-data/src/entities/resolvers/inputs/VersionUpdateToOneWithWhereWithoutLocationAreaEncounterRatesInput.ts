import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionUpdateWithoutLocationAreaEncounterRatesInput } from "../inputs/VersionUpdateWithoutLocationAreaEncounterRatesInput";
import { VersionWhereInput } from "../inputs/VersionWhereInput";

@TypeGraphQL.InputType("VersionUpdateToOneWithWhereWithoutLocationAreaEncounterRatesInput", {})
export class VersionUpdateToOneWithWhereWithoutLocationAreaEncounterRatesInput {
  @TypeGraphQL.Field(_type => VersionWhereInput, {
    nullable: true
  })
  where?: VersionWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionUpdateWithoutLocationAreaEncounterRatesInput, {
    nullable: false
  })
  data!: VersionUpdateWithoutLocationAreaEncounterRatesInput;
}
