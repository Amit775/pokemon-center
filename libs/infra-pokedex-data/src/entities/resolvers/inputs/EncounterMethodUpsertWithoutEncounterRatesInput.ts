import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodCreateWithoutEncounterRatesInput } from "../inputs/EncounterMethodCreateWithoutEncounterRatesInput";
import { EncounterMethodUpdateWithoutEncounterRatesInput } from "../inputs/EncounterMethodUpdateWithoutEncounterRatesInput";
import { EncounterMethodWhereInput } from "../inputs/EncounterMethodWhereInput";

@TypeGraphQL.InputType("EncounterMethodUpsertWithoutEncounterRatesInput", {})
export class EncounterMethodUpsertWithoutEncounterRatesInput {
  @TypeGraphQL.Field(_type => EncounterMethodUpdateWithoutEncounterRatesInput, {
    nullable: false
  })
  update!: EncounterMethodUpdateWithoutEncounterRatesInput;

  @TypeGraphQL.Field(_type => EncounterMethodCreateWithoutEncounterRatesInput, {
    nullable: false
  })
  create!: EncounterMethodCreateWithoutEncounterRatesInput;

  @TypeGraphQL.Field(_type => EncounterMethodWhereInput, {
    nullable: true
  })
  where?: EncounterMethodWhereInput | undefined;
}
