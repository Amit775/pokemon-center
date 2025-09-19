import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotScalarWhereInput } from "../inputs/EncounterSlotScalarWhereInput";
import { EncounterSlotUpdateManyMutationInput } from "../inputs/EncounterSlotUpdateManyMutationInput";

@TypeGraphQL.InputType("EncounterSlotUpdateManyWithWhereWithoutEncounterMethodInput", {})
export class EncounterSlotUpdateManyWithWhereWithoutEncounterMethodInput {
  @TypeGraphQL.Field(_type => EncounterSlotScalarWhereInput, {
    nullable: false
  })
  where!: EncounterSlotScalarWhereInput;

  @TypeGraphQL.Field(_type => EncounterSlotUpdateManyMutationInput, {
    nullable: false
  })
  data!: EncounterSlotUpdateManyMutationInput;
}
