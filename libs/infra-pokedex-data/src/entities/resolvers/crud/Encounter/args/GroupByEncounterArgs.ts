import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterOrderByWithAggregationInput } from "../../../inputs/EncounterOrderByWithAggregationInput";
import { EncounterScalarWhereWithAggregatesInput } from "../../../inputs/EncounterScalarWhereWithAggregatesInput";
import { EncounterWhereInput } from "../../../inputs/EncounterWhereInput";
import { EncounterScalarFieldEnum } from "../../../../enums/EncounterScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEncounterArgs {
  @TypeGraphQL.Field(_type => EncounterWhereInput, {
    nullable: true
  })
  where?: EncounterWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EncounterOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EncounterOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "version_id" | "location_area_id" | "encounter_slot_id" | "pokemon_id" | "min_level" | "max_level">;

  @TypeGraphQL.Field(_type => EncounterScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EncounterScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
