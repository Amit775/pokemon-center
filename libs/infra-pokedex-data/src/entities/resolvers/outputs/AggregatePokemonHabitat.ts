import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonHabitatAvgAggregate } from "../outputs/PokemonHabitatAvgAggregate";
import { PokemonHabitatCountAggregate } from "../outputs/PokemonHabitatCountAggregate";
import { PokemonHabitatMaxAggregate } from "../outputs/PokemonHabitatMaxAggregate";
import { PokemonHabitatMinAggregate } from "../outputs/PokemonHabitatMinAggregate";
import { PokemonHabitatSumAggregate } from "../outputs/PokemonHabitatSumAggregate";

@TypeGraphQL.ObjectType("AggregatePokemonHabitat", {})
export class AggregatePokemonHabitat {
  @TypeGraphQL.Field(_type => PokemonHabitatCountAggregate, {
    nullable: true
  })
  _count!: PokemonHabitatCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonHabitatAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonHabitatAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonHabitatSumAggregate, {
    nullable: true
  })
  _sum!: PokemonHabitatSumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonHabitatMinAggregate, {
    nullable: true
  })
  _min!: PokemonHabitatMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonHabitatMaxAggregate, {
    nullable: true
  })
  _max!: PokemonHabitatMaxAggregate | null;
}
