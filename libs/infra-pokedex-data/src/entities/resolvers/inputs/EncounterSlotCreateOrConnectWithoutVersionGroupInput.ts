import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotCreateWithoutVersionGroupInput } from "../inputs/EncounterSlotCreateWithoutVersionGroupInput";
import { EncounterSlotWhereUniqueInput } from "../inputs/EncounterSlotWhereUniqueInput";

@TypeGraphQL.InputType("EncounterSlotCreateOrConnectWithoutVersionGroupInput", {})
export class EncounterSlotCreateOrConnectWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => EncounterSlotWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterSlotWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterSlotCreateWithoutVersionGroupInput, {
    nullable: false
  })
  create!: EncounterSlotCreateWithoutVersionGroupInput;
}
