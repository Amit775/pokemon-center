import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemAvgAggregate } from "../outputs/PokemonItemAvgAggregate";
import { PokemonItemCountAggregate } from "../outputs/PokemonItemCountAggregate";
import { PokemonItemMaxAggregate } from "../outputs/PokemonItemMaxAggregate";
import { PokemonItemMinAggregate } from "../outputs/PokemonItemMinAggregate";
import { PokemonItemSumAggregate } from "../outputs/PokemonItemSumAggregate";

@TypeGraphQL.ObjectType("AggregatePokemonItem", {})
export class AggregatePokemonItem {
  @TypeGraphQL.Field(_type => PokemonItemCountAggregate, {
    nullable: true
  })
  _count!: PokemonItemCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonItemAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonItemAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonItemSumAggregate, {
    nullable: true
  })
  _sum!: PokemonItemSumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonItemMinAggregate, {
    nullable: true
  })
  _min!: PokemonItemMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonItemMaxAggregate, {
    nullable: true
  })
  _max!: PokemonItemMaxAggregate | null;
}
