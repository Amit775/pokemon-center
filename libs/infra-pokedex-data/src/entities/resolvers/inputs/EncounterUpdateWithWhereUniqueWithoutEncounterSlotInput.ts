import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterUpdateWithoutEncounterSlotInput } from "../inputs/EncounterUpdateWithoutEncounterSlotInput";
import { EncounterWhereUniqueInput } from "../inputs/EncounterWhereUniqueInput";

@TypeGraphQL.InputType("EncounterUpdateWithWhereUniqueWithoutEncounterSlotInput", {})
export class EncounterUpdateWithWhereUniqueWithoutEncounterSlotInput {
  @TypeGraphQL.Field(_type => EncounterWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterUpdateWithoutEncounterSlotInput, {
    nullable: false
  })
  data!: EncounterUpdateWithoutEncounterSlotInput;
}
