import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterSlotsWhereInput } from "../../inputs/EncounterSlotsWhereInput";

@TypeGraphQL.ArgsType()
export class VersionGroupsCountEncounterSlotsArgs {
  @TypeGraphQL.Field(_type => EncounterSlotsWhereInput, {
    nullable: true
  })
  where?: EncounterSlotsWhereInput | undefined;
}
