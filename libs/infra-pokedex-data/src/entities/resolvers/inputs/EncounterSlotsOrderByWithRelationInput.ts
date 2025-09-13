import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodsOrderByWithRelationInput } from "../inputs/EncounterMethodsOrderByWithRelationInput";
import { EncountersOrderByRelationAggregateInput } from "../inputs/EncountersOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { VersionGroupsOrderByWithRelationInput } from "../inputs/VersionGroupsOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EncounterSlotsOrderByWithRelationInput", {})
export class EncounterSlotsOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  version_group_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  encounter_method_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  slot?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rarity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsOrderByWithRelationInput, {
    nullable: true
  })
  versionGroup?: VersionGroupsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodsOrderByWithRelationInput, {
    nullable: true
  })
  encounterMethod?: EncounterMethodsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => EncountersOrderByRelationAggregateInput, {
    nullable: true
  })
  encounters?: EncountersOrderByRelationAggregateInput | undefined;
}
