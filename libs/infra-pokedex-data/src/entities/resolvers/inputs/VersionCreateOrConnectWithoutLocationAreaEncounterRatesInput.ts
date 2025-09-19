import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionCreateWithoutLocationAreaEncounterRatesInput } from "../inputs/VersionCreateWithoutLocationAreaEncounterRatesInput";
import { VersionWhereUniqueInput } from "../inputs/VersionWhereUniqueInput";

@TypeGraphQL.InputType("VersionCreateOrConnectWithoutLocationAreaEncounterRatesInput", {})
export class VersionCreateOrConnectWithoutLocationAreaEncounterRatesInput {
  @TypeGraphQL.Field(_type => VersionWhereUniqueInput, {
    nullable: false
  })
  where!: VersionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionCreateWithoutLocationAreaEncounterRatesInput, {
    nullable: false
  })
  create!: VersionCreateWithoutLocationAreaEncounterRatesInput;
}
