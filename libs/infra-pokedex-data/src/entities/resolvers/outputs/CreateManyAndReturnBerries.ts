import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnBerriesNaturalGiftTypeArgs } from "./args/CreateManyAndReturnBerriesNaturalGiftTypeArgs";
import { BerryFirmness } from "../../models/BerryFirmness";
import { Items } from "../../models/Items";
import { Types } from "../../models/Types";

@TypeGraphQL.ObjectType("CreateManyAndReturnBerries", {})
export class CreateManyAndReturnBerries {
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

  @TypeGraphQL.Field(_type => Items, {
    nullable: false
  })
  item!: Items;

  @TypeGraphQL.Field(_type => BerryFirmness, {
    nullable: false
  })
  firmness!: BerryFirmness;

  naturalGiftType!: Types | null;

  @TypeGraphQL.Field(_type => Types, {
    name: "naturalGiftType",
    nullable: true
  })
  getNaturalGiftType(@TypeGraphQL.Root() root: CreateManyAndReturnBerries, @TypeGraphQL.Args() args: CreateManyAndReturnBerriesNaturalGiftTypeArgs): Types | null {
    return root.naturalGiftType;
  }
}
