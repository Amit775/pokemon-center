import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionsUpdateWithoutLocationAreaEncounterRatesInput } from "../inputs/VersionsUpdateWithoutLocationAreaEncounterRatesInput";
import { VersionsWhereInput } from "../inputs/VersionsWhereInput";

@TypeGraphQL.InputType("VersionsUpdateToOneWithWhereWithoutLocationAreaEncounterRatesInput", {})
export class VersionsUpdateToOneWithWhereWithoutLocationAreaEncounterRatesInput {
  @TypeGraphQL.Field(_type => VersionsWhereInput, {
    nullable: true
  })
  where?: VersionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionsUpdateWithoutLocationAreaEncounterRatesInput, {
    nullable: false
  })
  data!: VersionsUpdateWithoutLocationAreaEncounterRatesInput;
}
