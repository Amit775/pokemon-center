import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonGameIndexAvgAggregate } from "../outputs/PokemonGameIndexAvgAggregate";
import { PokemonGameIndexCountAggregate } from "../outputs/PokemonGameIndexCountAggregate";
import { PokemonGameIndexMaxAggregate } from "../outputs/PokemonGameIndexMaxAggregate";
import { PokemonGameIndexMinAggregate } from "../outputs/PokemonGameIndexMinAggregate";
import { PokemonGameIndexSumAggregate } from "../outputs/PokemonGameIndexSumAggregate";

@TypeGraphQL.ObjectType("PokemonGameIndexGroupBy", {})
export class PokemonGameIndexGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokemon_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  version_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  game_index!: number;

  @TypeGraphQL.Field(_type => PokemonGameIndexCountAggregate, {
    nullable: true
  })
  _count!: PokemonGameIndexCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonGameIndexAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonGameIndexAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonGameIndexSumAggregate, {
    nullable: true
  })
  _sum!: PokemonGameIndexSumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonGameIndexMinAggregate, {
    nullable: true
  })
  _min!: PokemonGameIndexMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonGameIndexMaxAggregate, {
    nullable: true
  })
  _max!: PokemonGameIndexMaxAggregate | null;
}
