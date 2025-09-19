import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterSlotCreateInput } from "../../../inputs/EncounterSlotCreateInput";
import { EncounterSlotUpdateInput } from "../../../inputs/EncounterSlotUpdateInput";
import { EncounterSlotWhereUniqueInput } from "../../../inputs/EncounterSlotWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneEncounterSlotArgs {
  @TypeGraphQL.Field(_type => EncounterSlotWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterSlotWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterSlotCreateInput, {
    nullable: false
  })
  create!: EncounterSlotCreateInput;

  @TypeGraphQL.Field(_type => EncounterSlotUpdateInput, {
    nullable: false
  })
  update!: EncounterSlotUpdateInput;
}
