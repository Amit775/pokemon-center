import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexAvgAggregate } from "../outputs/PokedexAvgAggregate";
import { PokedexCountAggregate } from "../outputs/PokedexCountAggregate";
import { PokedexMaxAggregate } from "../outputs/PokedexMaxAggregate";
import { PokedexMinAggregate } from "../outputs/PokedexMinAggregate";
import { PokedexSumAggregate } from "../outputs/PokedexSumAggregate";

@TypeGraphQL.ObjectType("PokedexGroupBy", {})
export class PokedexGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  region_id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  is_main_series!: number;

  @TypeGraphQL.Field(_type => PokedexCountAggregate, {
    nullable: true
  })
  _count!: PokedexCountAggregate | null;

  @TypeGraphQL.Field(_type => PokedexAvgAggregate, {
    nullable: true
  })
  _avg!: PokedexAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokedexSumAggregate, {
    nullable: true
  })
  _sum!: PokedexSumAggregate | null;

  @TypeGraphQL.Field(_type => PokedexMinAggregate, {
    nullable: true
  })
  _min!: PokedexMinAggregate | null;

  @TypeGraphQL.Field(_type => PokedexMaxAggregate, {
    nullable: true
  })
  _max!: PokedexMaxAggregate | null;
}
