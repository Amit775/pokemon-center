import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFirmnessOrderByWithRelationInput } from "../inputs/BerryFirmnessOrderByWithRelationInput";
import { BerryFlavorOrderByRelationAggregateInput } from "../inputs/BerryFlavorOrderByRelationAggregateInput";
import { ItemOrderByWithRelationInput } from "../inputs/ItemOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { TypeOrderByWithRelationInput } from "../inputs/TypeOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BerryOrderByWithRelationInput", {})
export class BerryOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => ItemOrderByWithRelationInput, {
    nullable: true
  })
  item?: ItemOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => BerryFirmnessOrderByWithRelationInput, {
    nullable: true
  })
  firmness?: BerryFirmnessOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => TypeOrderByWithRelationInput, {
    nullable: true
  })
  naturalGiftType?: TypeOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorOrderByRelationAggregateInput, {
    nullable: true
  })
  flavors?: BerryFlavorOrderByRelationAggregateInput | undefined;
}
