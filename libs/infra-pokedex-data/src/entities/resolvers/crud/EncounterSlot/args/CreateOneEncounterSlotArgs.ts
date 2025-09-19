import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterSlotCreateInput } from "../../../inputs/EncounterSlotCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneEncounterSlotArgs {
  @TypeGraphQL.Field(_type => EncounterSlotCreateInput, {
    nullable: false
  })
  data!: EncounterSlotCreateInput;
}
