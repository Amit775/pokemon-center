import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterSlotsCreateInput } from "../../../inputs/EncounterSlotsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneEncounterSlotsArgs {
  @TypeGraphQL.Field(_type => EncounterSlotsCreateInput, {
    nullable: false
  })
  data!: EncounterSlotsCreateInput;
}
