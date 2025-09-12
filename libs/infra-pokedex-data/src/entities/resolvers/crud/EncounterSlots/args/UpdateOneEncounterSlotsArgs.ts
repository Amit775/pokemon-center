import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterSlotsUpdateInput } from "../../../inputs/EncounterSlotsUpdateInput";
import { EncounterSlotsWhereUniqueInput } from "../../../inputs/EncounterSlotsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneEncounterSlotsArgs {
  @TypeGraphQL.Field(_type => EncounterSlotsUpdateInput, {
    nullable: false
  })
  data!: EncounterSlotsUpdateInput;

  @TypeGraphQL.Field(_type => EncounterSlotsWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterSlotsWhereUniqueInput;
}
