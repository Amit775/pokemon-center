import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersUpdateWithoutEncounterSlotInput } from "../inputs/EncountersUpdateWithoutEncounterSlotInput";
import { EncountersWhereUniqueInput } from "../inputs/EncountersWhereUniqueInput";

@TypeGraphQL.InputType("EncountersUpdateWithWhereUniqueWithoutEncounterSlotInput", {})
export class EncountersUpdateWithWhereUniqueWithoutEncounterSlotInput {
  @TypeGraphQL.Field(_type => EncountersWhereUniqueInput, {
    nullable: false
  })
  where!: EncountersWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncountersUpdateWithoutEncounterSlotInput, {
    nullable: false
  })
  data!: EncountersUpdateWithoutEncounterSlotInput;
}
