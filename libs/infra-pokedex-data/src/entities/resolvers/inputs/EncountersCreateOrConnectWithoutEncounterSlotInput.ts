import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersCreateWithoutEncounterSlotInput } from "../inputs/EncountersCreateWithoutEncounterSlotInput";
import { EncountersWhereUniqueInput } from "../inputs/EncountersWhereUniqueInput";

@TypeGraphQL.InputType("EncountersCreateOrConnectWithoutEncounterSlotInput", {})
export class EncountersCreateOrConnectWithoutEncounterSlotInput {
  @TypeGraphQL.Field(_type => EncountersWhereUniqueInput, {
    nullable: false
  })
  where!: EncountersWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncountersCreateWithoutEncounterSlotInput, {
    nullable: false
  })
  create!: EncountersCreateWithoutEncounterSlotInput;
}
