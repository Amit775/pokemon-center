import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnBerryNaturalGiftTypeArgs } from "./args/CreateManyAndReturnBerryNaturalGiftTypeArgs";
import { BerryFirmness } from "../../models/BerryFirmness";
import { Item } from "../../models/Item";
import { Type } from "../../models/Type";

@TypeGraphQL.ObjectType("CreateManyAndReturnBerry", {})
export class CreateManyAndReturnBerry {
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
  natural_gift_power!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  natural_gift_type_id!: number | null;

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

  @TypeGraphQL.Field(_type => Item, {
    nullable: false
  })
  item!: Item;

  @TypeGraphQL.Field(_type => BerryFirmness, {
    nullable: false
  })
  firmness!: BerryFirmness;

  naturalGiftType!: Type | null;

  @TypeGraphQL.Field(_type => Type, {
    name: "naturalGiftType",
    nullable: true
  })
  getNaturalGiftType(@TypeGraphQL.Root() root: CreateManyAndReturnBerry, @TypeGraphQL.Args() args: CreateManyAndReturnBerryNaturalGiftTypeArgs): Type | null {
    return root.naturalGiftType;
  }
}
