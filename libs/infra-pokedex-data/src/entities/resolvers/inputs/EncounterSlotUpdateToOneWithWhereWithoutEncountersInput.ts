import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotUpdateWithoutEncountersInput } from "../inputs/EncounterSlotUpdateWithoutEncountersInput";
import { EncounterSlotWhereInput } from "../inputs/EncounterSlotWhereInput";

@TypeGraphQL.InputType("EncounterSlotUpdateToOneWithWhereWithoutEncountersInput", {})
export class EncounterSlotUpdateToOneWithWhereWithoutEncountersInput {
  @TypeGraphQL.Field(_type => EncounterSlotWhereInput, {
    nullable: true
  })
  where?: EncounterSlotWhereInput | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotUpdateWithoutEncountersInput, {
    nullable: false
  })
  data!: EncounterSlotUpdateWithoutEncountersInput;
}
