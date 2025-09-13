import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterSlotsOrderByWithAggregationInput } from "../../../inputs/EncounterSlotsOrderByWithAggregationInput";
import { EncounterSlotsScalarWhereWithAggregatesInput } from "../../../inputs/EncounterSlotsScalarWhereWithAggregatesInput";
import { EncounterSlotsWhereInput } from "../../../inputs/EncounterSlotsWhereInput";
import { EncounterSlotsScalarFieldEnum } from "../../../../enums/EncounterSlotsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEncounterSlotsArgs {
  @TypeGraphQL.Field(_type => EncounterSlotsWhereInput, {
    nullable: true
  })
  where?: EncounterSlotsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EncounterSlotsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "version_group_id" | "encounter_method_id" | "slot" | "rarity">;

  @TypeGraphQL.Field(_type => EncounterSlotsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EncounterSlotsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
