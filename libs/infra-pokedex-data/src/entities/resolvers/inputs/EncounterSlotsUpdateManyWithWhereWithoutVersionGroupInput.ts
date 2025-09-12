import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotsScalarWhereInput } from "../inputs/EncounterSlotsScalarWhereInput";
import { EncounterSlotsUpdateManyMutationInput } from "../inputs/EncounterSlotsUpdateManyMutationInput";

@TypeGraphQL.InputType("EncounterSlotsUpdateManyWithWhereWithoutVersionGroupInput", {})
export class EncounterSlotsUpdateManyWithWhereWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => EncounterSlotsScalarWhereInput, {
    nullable: false
  })
  where!: EncounterSlotsScalarWhereInput;

  @TypeGraphQL.Field(_type => EncounterSlotsUpdateManyMutationInput, {
    nullable: false
  })
  data!: EncounterSlotsUpdateManyMutationInput;
}
