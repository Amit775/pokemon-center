import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveAvgAggregate } from "../outputs/PokemonMoveAvgAggregate";
import { PokemonMoveCountAggregate } from "../outputs/PokemonMoveCountAggregate";
import { PokemonMoveMaxAggregate } from "../outputs/PokemonMoveMaxAggregate";
import { PokemonMoveMinAggregate } from "../outputs/PokemonMoveMinAggregate";
import { PokemonMoveSumAggregate } from "../outputs/PokemonMoveSumAggregate";

@TypeGraphQL.ObjectType("PokemonMoveGroupBy", {})
export class PokemonMoveGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokemon_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  version_group_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  move_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokemon_move_method_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  level!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  order!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  mastery!: number | null;

  @TypeGraphQL.Field(_type => PokemonMoveCountAggregate, {
    nullable: true
  })
  _count!: PokemonMoveCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonMoveAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonMoveAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonMoveSumAggregate, {
    nullable: true
  })
  _sum!: PokemonMoveSumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonMoveMinAggregate, {
    nullable: true
  })
  _min!: PokemonMoveMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonMoveMaxAggregate, {
    nullable: true
  })
  _max!: PokemonMoveMaxAggregate | null;
}
