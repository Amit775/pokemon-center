import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotsCreateWithoutEncountersInput } from "../inputs/EncounterSlotsCreateWithoutEncountersInput";
import { EncounterSlotsWhereUniqueInput } from "../inputs/EncounterSlotsWhereUniqueInput";

@TypeGraphQL.InputType("EncounterSlotsCreateOrConnectWithoutEncountersInput", {})
export class EncounterSlotsCreateOrConnectWithoutEncountersInput {
  @TypeGraphQL.Field(_type => EncounterSlotsWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterSlotsWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterSlotsCreateWithoutEncountersInput, {
    nullable: false
  })
  create!: EncounterSlotsCreateWithoutEncountersInput;
}
