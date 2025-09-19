import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFirmnessRelationFilter } from "../inputs/BerryFirmnessRelationFilter";
import { BerryFlavorListRelationFilter } from "../inputs/BerryFlavorListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { ItemRelationFilter } from "../inputs/ItemRelationFilter";
import { TypesNullableRelationFilter } from "../inputs/TypesNullableRelationFilter";

@TypeGraphQL.InputType("BerryWhereInput", {})
export class BerryWhereInput {
  @TypeGraphQL.Field(_type => [BerryWhereInput], {
    nullable: true
  })
  AND?: BerryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryWhereInput], {
    nullable: true
  })
  OR?: BerryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryWhereInput], {
    nullable: true
  })
  NOT?: BerryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  item_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  firmness_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  natural_gift_power?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  natural_gift_type_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  size?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  max_harvest?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  growth_time?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  soil_dryness?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  smoothness?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ItemRelationFilter, {
    nullable: true
  })
  item?: ItemRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BerryFirmnessRelationFilter, {
    nullable: true
  })
  firmness?: BerryFirmnessRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TypesNullableRelationFilter, {
    nullable: true
  })
  naturalGiftType?: TypesNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorListRelationFilter, {
    nullable: true
  })
  flavors?: BerryFlavorListRelationFilter | undefined;
}
