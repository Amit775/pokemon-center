import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterSlotWhereInput } from "../../inputs/EncounterSlotWhereInput";

@TypeGraphQL.ArgsType()
export class VersionGroupCountEncounterSlotsArgs {
  @TypeGraphQL.Field(_type => EncounterSlotWhereInput, {
    nullable: true
  })
  where?: EncounterSlotWhereInput | undefined;
}
