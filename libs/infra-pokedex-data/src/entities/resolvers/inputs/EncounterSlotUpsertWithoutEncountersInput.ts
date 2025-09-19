import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotCreateWithoutEncountersInput } from "../inputs/EncounterSlotCreateWithoutEncountersInput";
import { EncounterSlotUpdateWithoutEncountersInput } from "../inputs/EncounterSlotUpdateWithoutEncountersInput";
import { EncounterSlotWhereInput } from "../inputs/EncounterSlotWhereInput";

@TypeGraphQL.InputType("EncounterSlotUpsertWithoutEncountersInput", {})
export class EncounterSlotUpsertWithoutEncountersInput {
  @TypeGraphQL.Field(_type => EncounterSlotUpdateWithoutEncountersInput, {
    nullable: false
  })
  update!: EncounterSlotUpdateWithoutEncountersInput;

  @TypeGraphQL.Field(_type => EncounterSlotCreateWithoutEncountersInput, {
    nullable: false
  })
  create!: EncounterSlotCreateWithoutEncountersInput;

  @TypeGraphQL.Field(_type => EncounterSlotWhereInput, {
    nullable: true
  })
  where?: EncounterSlotWhereInput | undefined;
}
