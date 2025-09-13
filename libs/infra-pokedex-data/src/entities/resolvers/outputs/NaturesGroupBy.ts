import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NaturesAvgAggregate } from "../outputs/NaturesAvgAggregate";
import { NaturesCountAggregate } from "../outputs/NaturesCountAggregate";
import { NaturesMaxAggregate } from "../outputs/NaturesMaxAggregate";
import { NaturesMinAggregate } from "../outputs/NaturesMinAggregate";
import { NaturesSumAggregate } from "../outputs/NaturesSumAggregate";

@TypeGraphQL.ObjectType("NaturesGroupBy", {})
export class NaturesGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  decreased_stat_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  increased_stat_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  hates_flavor_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  likes_flavor_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  game_index!: number;

  @TypeGraphQL.Field(_type => NaturesCountAggregate, {
    nullable: true
  })
  _count!: NaturesCountAggregate | null;

  @TypeGraphQL.Field(_type => NaturesAvgAggregate, {
    nullable: true
  })
  _avg!: NaturesAvgAggregate | null;

  @TypeGraphQL.Field(_type => NaturesSumAggregate, {
    nullable: true
  })
  _sum!: NaturesSumAggregate | null;

  @TypeGraphQL.Field(_type => NaturesMinAggregate, {
    nullable: true
  })
  _min!: NaturesMinAggregate | null;

  @TypeGraphQL.Field(_type => NaturesMaxAggregate, {
    nullable: true
  })
  _max!: NaturesMaxAggregate | null;
}
