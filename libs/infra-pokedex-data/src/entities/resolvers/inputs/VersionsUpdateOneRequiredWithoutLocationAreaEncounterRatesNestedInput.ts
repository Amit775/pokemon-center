import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionsCreateOrConnectWithoutLocationAreaEncounterRatesInput } from "../inputs/VersionsCreateOrConnectWithoutLocationAreaEncounterRatesInput";
import { VersionsCreateWithoutLocationAreaEncounterRatesInput } from "../inputs/VersionsCreateWithoutLocationAreaEncounterRatesInput";
import { VersionsUpdateToOneWithWhereWithoutLocationAreaEncounterRatesInput } from "../inputs/VersionsUpdateToOneWithWhereWithoutLocationAreaEncounterRatesInput";
import { VersionsUpsertWithoutLocationAreaEncounterRatesInput } from "../inputs/VersionsUpsertWithoutLocationAreaEncounterRatesInput";
import { VersionsWhereUniqueInput } from "../inputs/VersionsWhereUniqueInput";

@TypeGraphQL.InputType("VersionsUpdateOneRequiredWithoutLocationAreaEncounterRatesNestedInput", {})
export class VersionsUpdateOneRequiredWithoutLocationAreaEncounterRatesNestedInput {
  @TypeGraphQL.Field(_type => VersionsCreateWithoutLocationAreaEncounterRatesInput, {
    nullable: true
  })
  create?: VersionsCreateWithoutLocationAreaEncounterRatesInput | undefined;

  @TypeGraphQL.Field(_type => VersionsCreateOrConnectWithoutLocationAreaEncounterRatesInput, {
    nullable: true
  })
  connectOrCreate?: VersionsCreateOrConnectWithoutLocationAreaEncounterRatesInput | undefined;

  @TypeGraphQL.Field(_type => VersionsUpsertWithoutLocationAreaEncounterRatesInput, {
    nullable: true
  })
  upsert?: VersionsUpsertWithoutLocationAreaEncounterRatesInput | undefined;

  @TypeGraphQL.Field(_type => VersionsWhereUniqueInput, {
    nullable: true
  })
  connect?: VersionsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => VersionsUpdateToOneWithWhereWithoutLocationAreaEncounterRatesInput, {
    nullable: true
  })
  update?: VersionsUpdateToOneWithWhereWithoutLocationAreaEncounterRatesInput | undefined;
}
