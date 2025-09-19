import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("EncounterSlotScalarWhereWithAggregatesInput", {})
export class EncounterSlotScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [EncounterSlotScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: EncounterSlotScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: EncounterSlotScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: EncounterSlotScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  version_group_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  encounter_method_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  slot?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  rarity?: IntWithAggregatesFilter | undefined;
}
