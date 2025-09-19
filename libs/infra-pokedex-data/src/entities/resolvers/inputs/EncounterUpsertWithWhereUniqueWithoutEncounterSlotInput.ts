import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterCreateWithoutEncounterSlotInput } from "../inputs/EncounterCreateWithoutEncounterSlotInput";
import { EncounterUpdateWithoutEncounterSlotInput } from "../inputs/EncounterUpdateWithoutEncounterSlotInput";
import { EncounterWhereUniqueInput } from "../inputs/EncounterWhereUniqueInput";

@TypeGraphQL.InputType("EncounterUpsertWithWhereUniqueWithoutEncounterSlotInput", {})
export class EncounterUpsertWithWhereUniqueWithoutEncounterSlotInput {
  @TypeGraphQL.Field(_type => EncounterWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterUpdateWithoutEncounterSlotInput, {
    nullable: false
  })
  update!: EncounterUpdateWithoutEncounterSlotInput;

  @TypeGraphQL.Field(_type => EncounterCreateWithoutEncounterSlotInput, {
    nullable: false
  })
  create!: EncounterCreateWithoutEncounterSlotInput;
}
