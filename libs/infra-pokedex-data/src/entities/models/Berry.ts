import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { BerryFirmness } from "../models/BerryFirmness";
import { BerryFlavor } from "../models/BerryFlavor";
import { Item } from "../models/Item";
import { Type } from "../models/Type";
import { BerryCount } from "../resolvers/outputs/BerryCount";

@TypeGraphQL.ObjectType("Berry", {})
export class Berry {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  item_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  firmness_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  natural_gift_power?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  natural_gift_type_id?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  size!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  max_harvest!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  growth_time!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  soil_dryness!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  smoothness!: number;

  item?: Item;

  firmness?: BerryFirmness;

  naturalGiftType?: Type | null;

  flavors?: BerryFlavor[];

  @TypeGraphQL.Field(_type => BerryCount, {
    nullable: true
  })
  _count?: BerryCount | null;
}
