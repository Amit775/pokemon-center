import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupAvgAggregate } from "../outputs/PokedexVersionGroupAvgAggregate";
import { PokedexVersionGroupCountAggregate } from "../outputs/PokedexVersionGroupCountAggregate";
import { PokedexVersionGroupMaxAggregate } from "../outputs/PokedexVersionGroupMaxAggregate";
import { PokedexVersionGroupMinAggregate } from "../outputs/PokedexVersionGroupMinAggregate";
import { PokedexVersionGroupSumAggregate } from "../outputs/PokedexVersionGroupSumAggregate";

@TypeGraphQL.ObjectType("PokedexVersionGroupGroupBy", {})
export class PokedexVersionGroupGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokedex_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  version_group_id!: number;

  @TypeGraphQL.Field(_type => PokedexVersionGroupCountAggregate, {
    nullable: true
  })
  _count!: PokedexVersionGroupCountAggregate | null;

  @TypeGraphQL.Field(_type => PokedexVersionGroupAvgAggregate, {
    nullable: true
  })
  _avg!: PokedexVersionGroupAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokedexVersionGroupSumAggregate, {
    nullable: true
  })
  _sum!: PokedexVersionGroupSumAggregate | null;

  @TypeGraphQL.Field(_type => PokedexVersionGroupMinAggregate, {
    nullable: true
  })
  _min!: PokedexVersionGroupMinAggregate | null;

  @TypeGraphQL.Field(_type => PokedexVersionGroupMaxAggregate, {
    nullable: true
  })
  _max!: PokedexVersionGroupMaxAggregate | null;
}
