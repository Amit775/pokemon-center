import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotsCreateWithoutVersionGroupInput } from "../inputs/EncounterSlotsCreateWithoutVersionGroupInput";
import { EncounterSlotsWhereUniqueInput } from "../inputs/EncounterSlotsWhereUniqueInput";

@TypeGraphQL.InputType("EncounterSlotsCreateOrConnectWithoutVersionGroupInput", {})
export class EncounterSlotsCreateOrConnectWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => EncounterSlotsWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterSlotsWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterSlotsCreateWithoutVersionGroupInput, {
    nullable: false
  })
  create!: EncounterSlotsCreateWithoutVersionGroupInput;
}
