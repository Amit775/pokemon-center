import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFirmnessOrderByWithRelationInput } from "../inputs/BerryFirmnessOrderByWithRelationInput";
import { BerryFlavorsOrderByRelationAggregateInput } from "../inputs/BerryFlavorsOrderByRelationAggregateInput";
import { ItemsOrderByWithRelationInput } from "../inputs/ItemsOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { TypesOrderByWithRelationInput } from "../inputs/TypesOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BerriesOrderByWithRelationInput", {})
export class BerriesOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  item_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  firmness_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  natural_gift_power?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  natural_gift_type_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  size?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  max_harvest?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  growth_time?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  soil_dryness?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  smoothness?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ItemsOrderByWithRelationInput, {
    nullable: true
  })
  item?: ItemsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => BerryFirmnessOrderByWithRelationInput, {
    nullable: true
  })
  firmness?: BerryFirmnessOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => TypesOrderByWithRelationInput, {
    nullable: true
  })
  naturalGiftType?: TypesOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorsOrderByRelationAggregateInput, {
    nullable: true
  })
  flavors?: BerryFlavorsOrderByRelationAggregateInput | undefined;
}
