import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterSlotsOrderByWithRelationInput } from "../../../inputs/EncounterSlotsOrderByWithRelationInput";
import { EncounterSlotsWhereInput } from "../../../inputs/EncounterSlotsWhereInput";
import { EncounterSlotsWhereUniqueInput } from "../../../inputs/EncounterSlotsWhereUniqueInput";
import { EncounterSlotsScalarFieldEnum } from "../../../../enums/EncounterSlotsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class VersionGroupsEncounterSlotsArgs {
  @TypeGraphQL.Field(_type => EncounterSlotsWhereInput, {
    nullable: true
  })
  where?: EncounterSlotsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EncounterSlotsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotsWhereUniqueInput, {
    nullable: true
  })
  cursor?: EncounterSlotsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "version_group_id" | "encounter_method_id" | "slot" | "rarity"> | undefined;
}
