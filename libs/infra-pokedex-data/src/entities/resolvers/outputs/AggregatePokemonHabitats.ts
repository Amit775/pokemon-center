import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonHabitatsAvgAggregate } from "../outputs/PokemonHabitatsAvgAggregate";
import { PokemonHabitatsCountAggregate } from "../outputs/PokemonHabitatsCountAggregate";
import { PokemonHabitatsMaxAggregate } from "../outputs/PokemonHabitatsMaxAggregate";
import { PokemonHabitatsMinAggregate } from "../outputs/PokemonHabitatsMinAggregate";
import { PokemonHabitatsSumAggregate } from "../outputs/PokemonHabitatsSumAggregate";

@TypeGraphQL.ObjectType("AggregatePokemonHabitats", {})
export class AggregatePokemonHabitats {
  @TypeGraphQL.Field(_type => PokemonHabitatsCountAggregate, {
    nullable: true
  })
  _count!: PokemonHabitatsCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonHabitatsAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonHabitatsAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonHabitatsSumAggregate, {
    nullable: true
  })
  _sum!: PokemonHabitatsSumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonHabitatsMinAggregate, {
    nullable: true
  })
  _min!: PokemonHabitatsMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonHabitatsMaxAggregate, {
    nullable: true
  })
  _max!: PokemonHabitatsMaxAggregate | null;
}
