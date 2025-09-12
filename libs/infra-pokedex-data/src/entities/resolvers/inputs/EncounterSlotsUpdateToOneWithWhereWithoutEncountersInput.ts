import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotsUpdateWithoutEncountersInput } from "../inputs/EncounterSlotsUpdateWithoutEncountersInput";
import { EncounterSlotsWhereInput } from "../inputs/EncounterSlotsWhereInput";

@TypeGraphQL.InputType("EncounterSlotsUpdateToOneWithWhereWithoutEncountersInput", {})
export class EncounterSlotsUpdateToOneWithWhereWithoutEncountersInput {
  @TypeGraphQL.Field(_type => EncounterSlotsWhereInput, {
    nullable: true
  })
  where?: EncounterSlotsWhereInput | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotsUpdateWithoutEncountersInput, {
    nullable: false
  })
  data!: EncounterSlotsUpdateWithoutEncountersInput;
}
