import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonColorsAvgAggregate } from "../outputs/PokemonColorsAvgAggregate";
import { PokemonColorsCountAggregate } from "../outputs/PokemonColorsCountAggregate";
import { PokemonColorsMaxAggregate } from "../outputs/PokemonColorsMaxAggregate";
import { PokemonColorsMinAggregate } from "../outputs/PokemonColorsMinAggregate";
import { PokemonColorsSumAggregate } from "../outputs/PokemonColorsSumAggregate";

@TypeGraphQL.ObjectType("AggregatePokemonColors", {})
export class AggregatePokemonColors {
  @TypeGraphQL.Field(_type => PokemonColorsCountAggregate, {
    nullable: true
  })
  _count!: PokemonColorsCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonColorsAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonColorsAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonColorsSumAggregate, {
    nullable: true
  })
  _sum!: PokemonColorsSumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonColorsMinAggregate, {
    nullable: true
  })
  _min!: PokemonColorsMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonColorsMaxAggregate, {
    nullable: true
  })
  _max!: PokemonColorsMaxAggregate | null;
}
