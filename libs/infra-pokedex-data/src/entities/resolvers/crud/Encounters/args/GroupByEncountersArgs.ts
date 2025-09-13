import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncountersOrderByWithAggregationInput } from "../../../inputs/EncountersOrderByWithAggregationInput";
import { EncountersScalarWhereWithAggregatesInput } from "../../../inputs/EncountersScalarWhereWithAggregatesInput";
import { EncountersWhereInput } from "../../../inputs/EncountersWhereInput";
import { EncountersScalarFieldEnum } from "../../../../enums/EncountersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEncountersArgs {
  @TypeGraphQL.Field(_type => EncountersWhereInput, {
    nullable: true
  })
  where?: EncountersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EncountersOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EncountersOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncountersScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "version_id" | "location_area_id" | "encounter_slot_id" | "pokemon_id" | "min_level" | "max_level">;

  @TypeGraphQL.Field(_type => EncountersScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EncountersScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
