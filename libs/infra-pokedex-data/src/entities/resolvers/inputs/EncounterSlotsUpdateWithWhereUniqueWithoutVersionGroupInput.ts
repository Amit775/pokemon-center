import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotsUpdateWithoutVersionGroupInput } from "../inputs/EncounterSlotsUpdateWithoutVersionGroupInput";
import { EncounterSlotsWhereUniqueInput } from "../inputs/EncounterSlotsWhereUniqueInput";

@TypeGraphQL.InputType("EncounterSlotsUpdateWithWhereUniqueWithoutVersionGroupInput", {})
export class EncounterSlotsUpdateWithWhereUniqueWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => EncounterSlotsWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterSlotsWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterSlotsUpdateWithoutVersionGroupInput, {
    nullable: false
  })
  data!: EncounterSlotsUpdateWithoutVersionGroupInput;
}
