import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexesAvgAggregate } from "../outputs/PokedexesAvgAggregate";
import { PokedexesCountAggregate } from "../outputs/PokedexesCountAggregate";
import { PokedexesMaxAggregate } from "../outputs/PokedexesMaxAggregate";
import { PokedexesMinAggregate } from "../outputs/PokedexesMinAggregate";
import { PokedexesSumAggregate } from "../outputs/PokedexesSumAggregate";

@TypeGraphQL.ObjectType("PokedexesGroupBy", {})
export class PokedexesGroupBy {
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

  @TypeGraphQL.Field(_type => PokedexesCountAggregate, {
    nullable: true
  })
  _count!: PokedexesCountAggregate | null;

  @TypeGraphQL.Field(_type => PokedexesAvgAggregate, {
    nullable: true
  })
  _avg!: PokedexesAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokedexesSumAggregate, {
    nullable: true
  })
  _sum!: PokedexesSumAggregate | null;

  @TypeGraphQL.Field(_type => PokedexesMinAggregate, {
    nullable: true
  })
  _min!: PokedexesMinAggregate | null;

  @TypeGraphQL.Field(_type => PokedexesMaxAggregate, {
    nullable: true
  })
  _max!: PokedexesMaxAggregate | null;
}
