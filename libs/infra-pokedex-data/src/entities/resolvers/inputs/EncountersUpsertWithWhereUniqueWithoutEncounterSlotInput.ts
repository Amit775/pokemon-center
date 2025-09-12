import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersCreateWithoutEncounterSlotInput } from "../inputs/EncountersCreateWithoutEncounterSlotInput";
import { EncountersUpdateWithoutEncounterSlotInput } from "../inputs/EncountersUpdateWithoutEncounterSlotInput";
import { EncountersWhereUniqueInput } from "../inputs/EncountersWhereUniqueInput";

@TypeGraphQL.InputType("EncountersUpsertWithWhereUniqueWithoutEncounterSlotInput", {})
export class EncountersUpsertWithWhereUniqueWithoutEncounterSlotInput {
  @TypeGraphQL.Field(_type => EncountersWhereUniqueInput, {
    nullable: false
  })
  where!: EncountersWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncountersUpdateWithoutEncounterSlotInput, {
    nullable: false
  })
  update!: EncountersUpdateWithoutEncounterSlotInput;

  @TypeGraphQL.Field(_type => EncountersCreateWithoutEncounterSlotInput, {
    nullable: false
  })
  create!: EncountersCreateWithoutEncounterSlotInput;
}
