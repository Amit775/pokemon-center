import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonStatAvgAggregate } from "../outputs/PokemonStatAvgAggregate";
import { PokemonStatCountAggregate } from "../outputs/PokemonStatCountAggregate";
import { PokemonStatMaxAggregate } from "../outputs/PokemonStatMaxAggregate";
import { PokemonStatMinAggregate } from "../outputs/PokemonStatMinAggregate";
import { PokemonStatSumAggregate } from "../outputs/PokemonStatSumAggregate";

@TypeGraphQL.ObjectType("AggregatePokemonStat", {})
export class AggregatePokemonStat {
  @TypeGraphQL.Field(_type => PokemonStatCountAggregate, {
    nullable: true
  })
  _count!: PokemonStatCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonStatAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonStatAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonStatSumAggregate, {
    nullable: true
  })
  _sum!: PokemonStatSumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonStatMinAggregate, {
    nullable: true
  })
  _min!: PokemonStatMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonStatMaxAggregate, {
    nullable: true
  })
  _max!: PokemonStatMaxAggregate | null;
}
