import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterListRelationFilter } from "../inputs/EncounterListRelationFilter";
import { EncounterMethodRelationFilter } from "../inputs/EncounterMethodRelationFilter";
import { EncounterSlotWhereInput } from "../inputs/EncounterSlotWhereInput";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { VersionGroupRelationFilter } from "../inputs/VersionGroupRelationFilter";

@TypeGraphQL.InputType("EncounterSlotWhereUniqueInput", {})
export class EncounterSlotWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotWhereInput], {
    nullable: true
  })
  AND?: EncounterSlotWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotWhereInput], {
    nullable: true
  })
  OR?: EncounterSlotWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotWhereInput], {
    nullable: true
  })
  NOT?: EncounterSlotWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => VersionGroupRelationFilter, {
    nullable: true
  })
  versionGroup?: VersionGroupRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodRelationFilter, {
    nullable: true
  })
  encounterMethod?: EncounterMethodRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EncounterListRelationFilter, {
    nullable: true
  })
  encounters?: EncounterListRelationFilter | undefined;
}
