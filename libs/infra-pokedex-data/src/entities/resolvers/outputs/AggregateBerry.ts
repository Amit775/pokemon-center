import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryAvgAggregate } from "../outputs/BerryAvgAggregate";
import { BerryCountAggregate } from "../outputs/BerryCountAggregate";
import { BerryMaxAggregate } from "../outputs/BerryMaxAggregate";
import { BerryMinAggregate } from "../outputs/BerryMinAggregate";
import { BerrySumAggregate } from "../outputs/BerrySumAggregate";

@TypeGraphQL.ObjectType("AggregateBerry", {})
export class AggregateBerry {
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
