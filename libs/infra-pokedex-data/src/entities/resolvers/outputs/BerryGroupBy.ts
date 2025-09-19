import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryAvgAggregate } from "../outputs/BerryAvgAggregate";
import { BerryCountAggregate } from "../outputs/BerryCountAggregate";
import { BerryMaxAggregate } from "../outputs/BerryMaxAggregate";
import { BerryMinAggregate } from "../outputs/BerryMinAggregate";
import { BerrySumAggregate } from "../outputs/BerrySumAggregate";

@TypeGraphQL.ObjectType("BerryGroupBy", {})
export class BerryGroupBy {
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

  @TypeGraphQL.Field(_type => BerryCountAggregate, {
    nullable: true
  })
  _count!: BerryCountAggregate | null;

  @TypeGraphQL.Field(_type => BerryAvgAggregate, {
    nullable: true
  })
  _avg!: BerryAvgAggregate | null;

  @TypeGraphQL.Field(_type => BerrySumAggregate, {
    nullable: true
  })
  _sum!: BerrySumAggregate | null;

  @TypeGraphQL.Field(_type => BerryMinAggregate, {
    nullable: true
  })
  _min!: BerryMinAggregate | null;

  @TypeGraphQL.Field(_type => BerryMaxAggregate, {
    nullable: true
  })
  _max!: BerryMaxAggregate | null;
}
