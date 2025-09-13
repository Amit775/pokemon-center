import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemsAvgAggregate } from "../outputs/PokemonItemsAvgAggregate";
import { PokemonItemsCountAggregate } from "../outputs/PokemonItemsCountAggregate";
import { PokemonItemsMaxAggregate } from "../outputs/PokemonItemsMaxAggregate";
import { PokemonItemsMinAggregate } from "../outputs/PokemonItemsMinAggregate";
import { PokemonItemsSumAggregate } from "../outputs/PokemonItemsSumAggregate";

@TypeGraphQL.ObjectType("AggregatePokemonItems", {})
export class AggregatePokemonItems {
  @TypeGraphQL.Field(_type => PokemonItemsCountAggregate, {
    nullable: true
  })
  _count!: PokemonItemsCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonItemsAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonItemsAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonItemsSumAggregate, {
    nullable: true
  })
  _sum!: PokemonItemsSumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonItemsMinAggregate, {
    nullable: true
  })
  _min!: PokemonItemsMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonItemsMaxAggregate, {
    nullable: true
  })
  _max!: PokemonItemsMaxAggregate | null;
}
