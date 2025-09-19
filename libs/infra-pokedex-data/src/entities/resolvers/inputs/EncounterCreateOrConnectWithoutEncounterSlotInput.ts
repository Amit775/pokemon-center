import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterCreateWithoutEncounterSlotInput } from "../inputs/EncounterCreateWithoutEncounterSlotInput";
import { EncounterWhereUniqueInput } from "../inputs/EncounterWhereUniqueInput";

@TypeGraphQL.InputType("EncounterCreateOrConnectWithoutEncounterSlotInput", {})
export class EncounterCreateOrConnectWithoutEncounterSlotInput {
  @TypeGraphQL.Field(_type => EncounterWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterCreateWithoutEncounterSlotInput, {
    nullable: false
  })
  create!: EncounterCreateWithoutEncounterSlotInput;
}
