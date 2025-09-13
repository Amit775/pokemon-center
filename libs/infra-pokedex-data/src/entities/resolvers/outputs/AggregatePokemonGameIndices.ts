import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonGameIndicesAvgAggregate } from "../outputs/PokemonGameIndicesAvgAggregate";
import { PokemonGameIndicesCountAggregate } from "../outputs/PokemonGameIndicesCountAggregate";
import { PokemonGameIndicesMaxAggregate } from "../outputs/PokemonGameIndicesMaxAggregate";
import { PokemonGameIndicesMinAggregate } from "../outputs/PokemonGameIndicesMinAggregate";
import { PokemonGameIndicesSumAggregate } from "../outputs/PokemonGameIndicesSumAggregate";

@TypeGraphQL.ObjectType("AggregatePokemonGameIndices", {})
export class AggregatePokemonGameIndices {
  @TypeGraphQL.Field(_type => PokemonGameIndicesCountAggregate, {
    nullable: true
  })
  _count!: PokemonGameIndicesCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonGameIndicesAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonGameIndicesAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonGameIndicesSumAggregate, {
    nullable: true
  })
  _sum!: PokemonGameIndicesSumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonGameIndicesMinAggregate, {
    nullable: true
  })
  _min!: PokemonGameIndicesMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonGameIndicesMaxAggregate, {
    nullable: true
  })
  _max!: PokemonGameIndicesMaxAggregate | null;
}
