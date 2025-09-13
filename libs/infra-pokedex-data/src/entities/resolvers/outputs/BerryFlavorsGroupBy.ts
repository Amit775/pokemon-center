import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorsAvgAggregate } from "../outputs/BerryFlavorsAvgAggregate";
import { BerryFlavorsCountAggregate } from "../outputs/BerryFlavorsCountAggregate";
import { BerryFlavorsMaxAggregate } from "../outputs/BerryFlavorsMaxAggregate";
import { BerryFlavorsMinAggregate } from "../outputs/BerryFlavorsMinAggregate";
import { BerryFlavorsSumAggregate } from "../outputs/BerryFlavorsSumAggregate";

@TypeGraphQL.ObjectType("BerryFlavorsGroupBy", {})
export class BerryFlavorsGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  berry_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  contest_type_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  flavor!: number;

  @TypeGraphQL.Field(_type => BerryFlavorsCountAggregate, {
    nullable: true
  })
  _count!: BerryFlavorsCountAggregate | null;

  @TypeGraphQL.Field(_type => BerryFlavorsAvgAggregate, {
    nullable: true
  })
  _avg!: BerryFlavorsAvgAggregate | null;

  @TypeGraphQL.Field(_type => BerryFlavorsSumAggregate, {
    nullable: true
  })
  _sum!: BerryFlavorsSumAggregate | null;

  @TypeGraphQL.Field(_type => BerryFlavorsMinAggregate, {
    nullable: true
  })
  _min!: BerryFlavorsMinAggregate | null;

  @TypeGraphQL.Field(_type => BerryFlavorsMaxAggregate, {
    nullable: true
  })
  _max!: BerryFlavorsMaxAggregate | null;
}
