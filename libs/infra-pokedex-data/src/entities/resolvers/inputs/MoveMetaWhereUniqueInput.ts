import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { MoveMetaAilmentsNullableRelationFilter } from "../inputs/MoveMetaAilmentsNullableRelationFilter";
import { MoveMetaCategoryRelationFilter } from "../inputs/MoveMetaCategoryRelationFilter";
import { MoveMetaStatChangesListRelationFilter } from "../inputs/MoveMetaStatChangesListRelationFilter";
import { MoveMetaWhereInput } from "../inputs/MoveMetaWhereInput";
import { MoveRelationFilter } from "../inputs/MoveRelationFilter";

@TypeGraphQL.InputType("MoveMetaWhereUniqueInput", {})
export class MoveMetaWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  move_id?: number | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaWhereInput], {
    nullable: true
  })
  AND?: MoveMetaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaWhereInput], {
    nullable: true
  })
  OR?: MoveMetaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaWhereInput], {
    nullable: true
  })
  NOT?: MoveMetaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  meta_category_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  meta_ailment_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  min_hits?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  max_hits?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  min_turns?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  max_turns?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  drain?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  healing?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  crit_rate?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  ailment_chance?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  flinch_chance?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  stat_chance?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => MoveRelationFilter, {
    nullable: true
  })
  move?: MoveRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCategoryRelationFilter, {
    nullable: true
  })
  metaCategory?: MoveMetaCategoryRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAilmentsNullableRelationFilter, {
    nullable: true
  })
  metaAilment?: MoveMetaAilmentsNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesListRelationFilter, {
    nullable: true
  })
  statChanges?: MoveMetaStatChangesListRelationFilter | undefined;
}
