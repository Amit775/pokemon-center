import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAbilityAvgAggregate } from "../outputs/PokemonAbilityAvgAggregate";
import { PokemonAbilityCountAggregate } from "../outputs/PokemonAbilityCountAggregate";
import { PokemonAbilityMaxAggregate } from "../outputs/PokemonAbilityMaxAggregate";
import { PokemonAbilityMinAggregate } from "../outputs/PokemonAbilityMinAggregate";
import { PokemonAbilitySumAggregate } from "../outputs/PokemonAbilitySumAggregate";

@TypeGraphQL.ObjectType("PokemonAbilityGroupBy", {})
export class PokemonAbilityGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokemon_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ability_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  is_hidden!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  slot!: number;

  @TypeGraphQL.Field(_type => PokemonAbilityCountAggregate, {
    nullable: true
  })
  _count!: PokemonAbilityCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonAbilityAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonAbilityAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonAbilitySumAggregate, {
    nullable: true
  })
  _sum!: PokemonAbilitySumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonAbilityMinAggregate, {
    nullable: true
  })
  _min!: PokemonAbilityMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonAbilityMaxAggregate, {
    nullable: true
  })
  _max!: PokemonAbilityMaxAggregate | null;
}
