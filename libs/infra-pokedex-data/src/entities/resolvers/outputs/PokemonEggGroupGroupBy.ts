import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEggGroupAvgAggregate } from "../outputs/PokemonEggGroupAvgAggregate";
import { PokemonEggGroupCountAggregate } from "../outputs/PokemonEggGroupCountAggregate";
import { PokemonEggGroupMaxAggregate } from "../outputs/PokemonEggGroupMaxAggregate";
import { PokemonEggGroupMinAggregate } from "../outputs/PokemonEggGroupMinAggregate";
import { PokemonEggGroupSumAggregate } from "../outputs/PokemonEggGroupSumAggregate";

@TypeGraphQL.ObjectType("PokemonEggGroupGroupBy", {})
export class PokemonEggGroupGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  species_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  egg_group_id!: number;

  @TypeGraphQL.Field(_type => PokemonEggGroupCountAggregate, {
    nullable: true
  })
  _count!: PokemonEggGroupCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonEggGroupAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonEggGroupAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonEggGroupSumAggregate, {
    nullable: true
  })
  _sum!: PokemonEggGroupSumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonEggGroupMinAggregate, {
    nullable: true
  })
  _min!: PokemonEggGroupMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonEggGroupMaxAggregate, {
    nullable: true
  })
  _max!: PokemonEggGroupMaxAggregate | null;
}
