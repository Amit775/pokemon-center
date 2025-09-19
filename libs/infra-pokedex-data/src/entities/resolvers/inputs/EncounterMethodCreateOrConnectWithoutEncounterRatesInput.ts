import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodCreateWithoutEncounterRatesInput } from "../inputs/EncounterMethodCreateWithoutEncounterRatesInput";
import { EncounterMethodWhereUniqueInput } from "../inputs/EncounterMethodWhereUniqueInput";

@TypeGraphQL.InputType("EncounterMethodCreateOrConnectWithoutEncounterRatesInput", {})
export class EncounterMethodCreateOrConnectWithoutEncounterRatesInput {
  @TypeGraphQL.Field(_type => EncounterMethodWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterMethodWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterMethodCreateWithoutEncounterRatesInput, {
    nullable: false
  })
  create!: EncounterMethodCreateWithoutEncounterRatesInput;
}
