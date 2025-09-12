import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupsAvgAggregate } from "../outputs/PokedexVersionGroupsAvgAggregate";
import { PokedexVersionGroupsCountAggregate } from "../outputs/PokedexVersionGroupsCountAggregate";
import { PokedexVersionGroupsMaxAggregate } from "../outputs/PokedexVersionGroupsMaxAggregate";
import { PokedexVersionGroupsMinAggregate } from "../outputs/PokedexVersionGroupsMinAggregate";
import { PokedexVersionGroupsSumAggregate } from "../outputs/PokedexVersionGroupsSumAggregate";

@TypeGraphQL.ObjectType("AggregatePokedexVersionGroups", {})
export class AggregatePokedexVersionGroups {
  @TypeGraphQL.Field(_type => PokedexVersionGroupsCountAggregate, {
    nullable: true
  })
  _count!: PokedexVersionGroupsCountAggregate | null;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsAvgAggregate, {
    nullable: true
  })
  _avg!: PokedexVersionGroupsAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsSumAggregate, {
    nullable: true
  })
  _sum!: PokedexVersionGroupsSumAggregate | null;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsMinAggregate, {
    nullable: true
  })
  _min!: PokedexVersionGroupsMinAggregate | null;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsMaxAggregate, {
    nullable: true
  })
  _max!: PokedexVersionGroupsMaxAggregate | null;
}
