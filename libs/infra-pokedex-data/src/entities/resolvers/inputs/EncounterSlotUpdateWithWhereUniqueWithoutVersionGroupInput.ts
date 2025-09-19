import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotUpdateWithoutVersionGroupInput } from "../inputs/EncounterSlotUpdateWithoutVersionGroupInput";
import { EncounterSlotWhereUniqueInput } from "../inputs/EncounterSlotWhereUniqueInput";

@TypeGraphQL.InputType("EncounterSlotUpdateWithWhereUniqueWithoutVersionGroupInput", {})
export class EncounterSlotUpdateWithWhereUniqueWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => EncounterSlotWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterSlotWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterSlotUpdateWithoutVersionGroupInput, {
    nullable: false
  })
  data!: EncounterSlotUpdateWithoutVersionGroupInput;
}
