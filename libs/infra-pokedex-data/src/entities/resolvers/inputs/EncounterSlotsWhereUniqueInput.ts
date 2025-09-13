import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodsRelationFilter } from "../inputs/EncounterMethodsRelationFilter";
import { EncounterSlotsWhereInput } from "../inputs/EncounterSlotsWhereInput";
import { EncountersListRelationFilter } from "../inputs/EncountersListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { VersionGroupsRelationFilter } from "../inputs/VersionGroupsRelationFilter";

@TypeGraphQL.InputType("EncounterSlotsWhereUniqueInput", {})
export class EncounterSlotsWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotsWhereInput], {
    nullable: true
  })
  AND?: EncounterSlotsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotsWhereInput], {
    nullable: true
  })
  OR?: EncounterSlotsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotsWhereInput], {
    nullable: true
  })
  NOT?: EncounterSlotsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  version_group_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  encounter_method_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  slot?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  rarity?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsRelationFilter, {
    nullable: true
  })
  versionGroup?: VersionGroupsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodsRelationFilter, {
    nullable: true
  })
  encounterMethod?: EncounterMethodsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EncountersListRelationFilter, {
    nullable: true
  })
  encounters?: EncountersListRelationFilter | undefined;
}
