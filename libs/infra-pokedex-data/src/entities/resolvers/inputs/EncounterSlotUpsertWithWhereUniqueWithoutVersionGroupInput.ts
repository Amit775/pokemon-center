import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotCreateWithoutVersionGroupInput } from "../inputs/EncounterSlotCreateWithoutVersionGroupInput";
import { EncounterSlotUpdateWithoutVersionGroupInput } from "../inputs/EncounterSlotUpdateWithoutVersionGroupInput";
import { EncounterSlotWhereUniqueInput } from "../inputs/EncounterSlotWhereUniqueInput";

@TypeGraphQL.InputType("EncounterSlotUpsertWithWhereUniqueWithoutVersionGroupInput", {})
export class EncounterSlotUpsertWithWhereUniqueWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => EncounterSlotWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterSlotWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterSlotUpdateWithoutVersionGroupInput, {
    nullable: false
  })
  update!: EncounterSlotUpdateWithoutVersionGroupInput;

  @TypeGraphQL.Field(_type => EncounterSlotCreateWithoutVersionGroupInput, {
    nullable: false
  })
  create!: EncounterSlotCreateWithoutVersionGroupInput;
}
