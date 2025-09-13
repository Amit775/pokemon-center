import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotsCreateWithoutEncountersInput } from "../inputs/EncounterSlotsCreateWithoutEncountersInput";
import { EncounterSlotsUpdateWithoutEncountersInput } from "../inputs/EncounterSlotsUpdateWithoutEncountersInput";
import { EncounterSlotsWhereInput } from "../inputs/EncounterSlotsWhereInput";

@TypeGraphQL.InputType("EncounterSlotsUpsertWithoutEncountersInput", {})
export class EncounterSlotsUpsertWithoutEncountersInput {
  @TypeGraphQL.Field(_type => EncounterSlotsUpdateWithoutEncountersInput, {
    nullable: false
  })
  update!: EncounterSlotsUpdateWithoutEncountersInput;

  @TypeGraphQL.Field(_type => EncounterSlotsCreateWithoutEncountersInput, {
    nullable: false
  })
  create!: EncounterSlotsCreateWithoutEncountersInput;

  @TypeGraphQL.Field(_type => EncounterSlotsWhereInput, {
    nullable: true
  })
  where?: EncounterSlotsWhereInput | undefined;
}
