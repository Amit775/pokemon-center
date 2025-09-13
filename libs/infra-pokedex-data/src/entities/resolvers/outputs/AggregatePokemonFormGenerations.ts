import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormGenerationsAvgAggregate } from "../outputs/PokemonFormGenerationsAvgAggregate";
import { PokemonFormGenerationsCountAggregate } from "../outputs/PokemonFormGenerationsCountAggregate";
import { PokemonFormGenerationsMaxAggregate } from "../outputs/PokemonFormGenerationsMaxAggregate";
import { PokemonFormGenerationsMinAggregate } from "../outputs/PokemonFormGenerationsMinAggregate";
import { PokemonFormGenerationsSumAggregate } from "../outputs/PokemonFormGenerationsSumAggregate";

@TypeGraphQL.ObjectType("AggregatePokemonFormGenerations", {})
export class AggregatePokemonFormGenerations {
  @TypeGraphQL.Field(_type => PokemonFormGenerationsCountAggregate, {
    nullable: true
  })
  _count!: PokemonFormGenerationsCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonFormGenerationsAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsSumAggregate, {
    nullable: true
  })
  _sum!: PokemonFormGenerationsSumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsMinAggregate, {
    nullable: true
  })
  _min!: PokemonFormGenerationsMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsMaxAggregate, {
    nullable: true
  })
  _max!: PokemonFormGenerationsMaxAggregate | null;
}
