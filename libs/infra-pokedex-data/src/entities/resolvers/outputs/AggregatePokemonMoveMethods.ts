import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveMethodsAvgAggregate } from "../outputs/PokemonMoveMethodsAvgAggregate";
import { PokemonMoveMethodsCountAggregate } from "../outputs/PokemonMoveMethodsCountAggregate";
import { PokemonMoveMethodsMaxAggregate } from "../outputs/PokemonMoveMethodsMaxAggregate";
import { PokemonMoveMethodsMinAggregate } from "../outputs/PokemonMoveMethodsMinAggregate";
import { PokemonMoveMethodsSumAggregate } from "../outputs/PokemonMoveMethodsSumAggregate";

@TypeGraphQL.ObjectType("AggregatePokemonMoveMethods", {})
export class AggregatePokemonMoveMethods {
  @TypeGraphQL.Field(_type => PokemonMoveMethodsCountAggregate, {
    nullable: true
  })
  _count!: PokemonMoveMethodsCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonMoveMethodsAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsSumAggregate, {
    nullable: true
  })
  _sum!: PokemonMoveMethodsSumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsMinAggregate, {
    nullable: true
  })
  _min!: PokemonMoveMethodsMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsMaxAggregate, {
    nullable: true
  })
  _max!: PokemonMoveMethodsMaxAggregate | null;
}
