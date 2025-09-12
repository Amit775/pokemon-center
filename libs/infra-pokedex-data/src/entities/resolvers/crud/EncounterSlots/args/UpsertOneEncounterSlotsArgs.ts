import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterSlotsCreateInput } from "../../../inputs/EncounterSlotsCreateInput";
import { EncounterSlotsUpdateInput } from "../../../inputs/EncounterSlotsUpdateInput";
import { EncounterSlotsWhereUniqueInput } from "../../../inputs/EncounterSlotsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneEncounterSlotsArgs {
  @TypeGraphQL.Field(_type => EncounterSlotsWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterSlotsWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterSlotsCreateInput, {
    nullable: false
  })
  create!: EncounterSlotsCreateInput;

  @TypeGraphQL.Field(_type => EncounterSlotsUpdateInput, {
    nullable: false
  })
  update!: EncounterSlotsUpdateInput;
}
