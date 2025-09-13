import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesAvgAggregate } from "../outputs/BerriesAvgAggregate";
import { BerriesCountAggregate } from "../outputs/BerriesCountAggregate";
import { BerriesMaxAggregate } from "../outputs/BerriesMaxAggregate";
import { BerriesMinAggregate } from "../outputs/BerriesMinAggregate";
import { BerriesSumAggregate } from "../outputs/BerriesSumAggregate";

@TypeGraphQL.ObjectType("AggregateBerries", {})
export class AggregateBerries {
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
