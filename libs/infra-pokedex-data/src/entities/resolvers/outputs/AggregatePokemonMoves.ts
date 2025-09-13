import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMovesAvgAggregate } from "../outputs/PokemonMovesAvgAggregate";
import { PokemonMovesCountAggregate } from "../outputs/PokemonMovesCountAggregate";
import { PokemonMovesMaxAggregate } from "../outputs/PokemonMovesMaxAggregate";
import { PokemonMovesMinAggregate } from "../outputs/PokemonMovesMinAggregate";
import { PokemonMovesSumAggregate } from "../outputs/PokemonMovesSumAggregate";

@TypeGraphQL.ObjectType("AggregatePokemonMoves", {})
export class AggregatePokemonMoves {
  @TypeGraphQL.Field(_type => PokemonMovesCountAggregate, {
    nullable: true
  })
  _count!: PokemonMovesCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonMovesAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonMovesAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonMovesSumAggregate, {
    nullable: true
  })
  _sum!: PokemonMovesSumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonMovesMinAggregate, {
    nullable: true
  })
  _min!: PokemonMovesMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonMovesMaxAggregate, {
    nullable: true
  })
  _max!: PokemonMovesMaxAggregate | null;
}
