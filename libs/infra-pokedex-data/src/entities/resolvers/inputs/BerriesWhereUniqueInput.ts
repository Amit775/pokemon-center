import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesWhereInput } from "../inputs/BerriesWhereInput";
import { BerryFirmnessRelationFilter } from "../inputs/BerryFirmnessRelationFilter";
import { BerryFlavorsListRelationFilter } from "../inputs/BerryFlavorsListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { ItemsRelationFilter } from "../inputs/ItemsRelationFilter";
import { TypesNullableRelationFilter } from "../inputs/TypesNullableRelationFilter";

@TypeGraphQL.InputType("BerriesWhereUniqueInput", {})
export class BerriesWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [BerriesWhereInput], {
    nullable: true
  })
  AND?: BerriesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerriesWhereInput], {
    nullable: true
  })
  OR?: BerriesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerriesWhereInput], {
    nullable: true
  })
  NOT?: BerriesWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => ItemsRelationFilter, {
    nullable: true
  })
  item?: ItemsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BerryFirmnessRelationFilter, {
    nullable: true
  })
  firmness?: BerryFirmnessRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TypesNullableRelationFilter, {
    nullable: true
  })
  naturalGiftType?: TypesNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorsListRelationFilter, {
    nullable: true
  })
  flavors?: BerryFlavorsListRelationFilter | undefined;
}
