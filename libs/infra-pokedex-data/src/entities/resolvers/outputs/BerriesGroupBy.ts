import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesAvgAggregate } from "../outputs/BerriesAvgAggregate";
import { BerriesCountAggregate } from "../outputs/BerriesCountAggregate";
import { BerriesMaxAggregate } from "../outputs/BerriesMaxAggregate";
import { BerriesMinAggregate } from "../outputs/BerriesMinAggregate";
import { BerriesSumAggregate } from "../outputs/BerriesSumAggregate";

@TypeGraphQL.ObjectType("BerriesGroupBy", {})
export class BerriesGroupBy {
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

  @TypeGraphQL.Field(_type => BerriesCountAggregate, {
    nullable: true
  })
  _count!: BerriesCountAggregate | null;

  @TypeGraphQL.Field(_type => BerriesAvgAggregate, {
    nullable: true
  })
  _avg!: BerriesAvgAggregate | null;

  @TypeGraphQL.Field(_type => BerriesSumAggregate, {
    nullable: true
  })
  _sum!: BerriesSumAggregate | null;

  @TypeGraphQL.Field(_type => BerriesMinAggregate, {
    nullable: true
  })
  _min!: BerriesMinAggregate | null;

  @TypeGraphQL.Field(_type => BerriesMaxAggregate, {
    nullable: true
  })
  _max!: BerriesMaxAggregate | null;
}
