import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterScalarWhereInput } from "../inputs/EncounterScalarWhereInput";
import { EncounterUpdateManyMutationInput } from "../inputs/EncounterUpdateManyMutationInput";

@TypeGraphQL.InputType("EncounterUpdateManyWithWhereWithoutEncounterSlotInput", {})
export class EncounterUpdateManyWithWhereWithoutEncounterSlotInput {
  @TypeGraphQL.Field(_type => EncounterScalarWhereInput, {
    nullable: false
  })
  where!: EncounterScalarWhereInput;

  @TypeGraphQL.Field(_type => EncounterUpdateManyMutationInput, {
    nullable: false
  })
  data!: EncounterUpdateManyMutationInput;
}
