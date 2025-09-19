import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionCreateOrConnectWithoutLocationAreaEncounterRatesInput } from "../inputs/VersionCreateOrConnectWithoutLocationAreaEncounterRatesInput";
import { VersionCreateWithoutLocationAreaEncounterRatesInput } from "../inputs/VersionCreateWithoutLocationAreaEncounterRatesInput";
import { VersionWhereUniqueInput } from "../inputs/VersionWhereUniqueInput";

@TypeGraphQL.InputType("VersionCreateNestedOneWithoutLocationAreaEncounterRatesInput", {})
export class VersionCreateNestedOneWithoutLocationAreaEncounterRatesInput {
  @TypeGraphQL.Field(_type => VersionCreateWithoutLocationAreaEncounterRatesInput, {
    nullable: true
  })
  create?: VersionCreateWithoutLocationAreaEncounterRatesInput | undefined;

  @TypeGraphQL.Field(_type => VersionCreateOrConnectWithoutLocationAreaEncounterRatesInput, {
    nullable: true
  })
  connectOrCreate?: VersionCreateOrConnectWithoutLocationAreaEncounterRatesInput | undefined;

  @TypeGraphQL.Field(_type => VersionWhereUniqueInput, {
    nullable: true
  })
  connect?: VersionWhereUniqueInput | undefined;
}
