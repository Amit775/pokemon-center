import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodOrderByWithRelationInput } from "../inputs/EncounterMethodOrderByWithRelationInput";
import { EncounterOrderByRelationAggregateInput } from "../inputs/EncounterOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { VersionGroupOrderByWithRelationInput } from "../inputs/VersionGroupOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EncounterSlotOrderByWithRelationInput", {})
export class EncounterSlotOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => VersionGroupOrderByWithRelationInput, {
    nullable: true
  })
  versionGroup?: VersionGroupOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodOrderByWithRelationInput, {
    nullable: true
  })
  encounterMethod?: EncounterMethodOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => EncounterOrderByRelationAggregateInput, {
    nullable: true
  })
  encounters?: EncounterOrderByRelationAggregateInput | undefined;
}
