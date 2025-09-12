import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesAvgAggregate } from "../outputs/PokemonSpeciesAvgAggregate";
import { PokemonSpeciesCountAggregate } from "../outputs/PokemonSpeciesCountAggregate";
import { PokemonSpeciesMaxAggregate } from "../outputs/PokemonSpeciesMaxAggregate";
import { PokemonSpeciesMinAggregate } from "../outputs/PokemonSpeciesMinAggregate";
import { PokemonSpeciesSumAggregate } from "../outputs/PokemonSpeciesSumAggregate";

@TypeGraphQL.ObjectType("AggregatePokemonSpecies", {})
export class AggregatePokemonSpecies {
  @TypeGraphQL.Field(_type => PokemonSpeciesCountAggregate, {
    nullable: true
  })
  _count!: PokemonSpeciesCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonSpeciesAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonSpeciesAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonSpeciesSumAggregate, {
    nullable: true
  })
  _sum!: PokemonSpeciesSumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonSpeciesMinAggregate, {
    nullable: true
  })
  _min!: PokemonSpeciesMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonSpeciesMaxAggregate, {
    nullable: true
  })
  _max!: PokemonSpeciesMaxAggregate | null;
}
