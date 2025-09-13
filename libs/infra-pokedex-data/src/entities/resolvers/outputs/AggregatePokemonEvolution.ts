import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionAvgAggregate } from "../outputs/PokemonEvolutionAvgAggregate";
import { PokemonEvolutionCountAggregate } from "../outputs/PokemonEvolutionCountAggregate";
import { PokemonEvolutionMaxAggregate } from "../outputs/PokemonEvolutionMaxAggregate";
import { PokemonEvolutionMinAggregate } from "../outputs/PokemonEvolutionMinAggregate";
import { PokemonEvolutionSumAggregate } from "../outputs/PokemonEvolutionSumAggregate";

@TypeGraphQL.ObjectType("AggregatePokemonEvolution", {})
export class AggregatePokemonEvolution {
  @TypeGraphQL.Field(_type => PokemonEvolutionCountAggregate, {
    nullable: true
  })
  _count!: PokemonEvolutionCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonEvolutionAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonEvolutionAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonEvolutionSumAggregate, {
    nullable: true
  })
  _sum!: PokemonEvolutionSumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonEvolutionMinAggregate, {
    nullable: true
  })
  _min!: PokemonEvolutionMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonEvolutionMaxAggregate, {
    nullable: true
  })
  _max!: PokemonEvolutionMaxAggregate | null;
}
