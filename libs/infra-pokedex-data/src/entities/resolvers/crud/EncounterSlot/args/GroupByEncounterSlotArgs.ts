import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterSlotOrderByWithAggregationInput } from "../../../inputs/EncounterSlotOrderByWithAggregationInput";
import { EncounterSlotScalarWhereWithAggregatesInput } from "../../../inputs/EncounterSlotScalarWhereWithAggregatesInput";
import { EncounterSlotWhereInput } from "../../../inputs/EncounterSlotWhereInput";
import { EncounterSlotScalarFieldEnum } from "../../../../enums/EncounterSlotScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEncounterSlotArgs {
  @TypeGraphQL.Field(_type => EncounterSlotWhereInput, {
    nullable: true
  })
  where?: EncounterSlotWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EncounterSlotOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "version_group_id" | "encounter_method_id" | "slot" | "rarity">;

  @TypeGraphQL.Field(_type => EncounterSlotScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EncounterSlotScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
