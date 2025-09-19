import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormGenerationAvgAggregate } from "../outputs/PokemonFormGenerationAvgAggregate";
import { PokemonFormGenerationCountAggregate } from "../outputs/PokemonFormGenerationCountAggregate";
import { PokemonFormGenerationMaxAggregate } from "../outputs/PokemonFormGenerationMaxAggregate";
import { PokemonFormGenerationMinAggregate } from "../outputs/PokemonFormGenerationMinAggregate";
import { PokemonFormGenerationSumAggregate } from "../outputs/PokemonFormGenerationSumAggregate";

@TypeGraphQL.ObjectType("AggregatePokemonFormGeneration", {})
export class AggregatePokemonFormGeneration {
  @TypeGraphQL.Field(_type => PokemonFormGenerationCountAggregate, {
    nullable: true
  })
  _count!: PokemonFormGenerationCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonFormGenerationAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonFormGenerationAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonFormGenerationSumAggregate, {
    nullable: true
  })
  _sum!: PokemonFormGenerationSumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonFormGenerationMinAggregate, {
    nullable: true
  })
  _min!: PokemonFormGenerationMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonFormGenerationMaxAggregate, {
    nullable: true
  })
  _max!: PokemonFormGenerationMaxAggregate | null;
}
