import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotCreateWithoutEncountersInput } from "../inputs/EncounterSlotCreateWithoutEncountersInput";
import { EncounterSlotWhereUniqueInput } from "../inputs/EncounterSlotWhereUniqueInput";

@TypeGraphQL.InputType("EncounterSlotCreateOrConnectWithoutEncountersInput", {})
export class EncounterSlotCreateOrConnectWithoutEncountersInput {
  @TypeGraphQL.Field(_type => EncounterSlotWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterSlotWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterSlotCreateWithoutEncountersInput, {
    nullable: false
  })
  create!: EncounterSlotCreateWithoutEncountersInput;
}
