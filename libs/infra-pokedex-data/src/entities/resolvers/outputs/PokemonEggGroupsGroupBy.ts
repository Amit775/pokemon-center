import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEggGroupsAvgAggregate } from "../outputs/PokemonEggGroupsAvgAggregate";
import { PokemonEggGroupsCountAggregate } from "../outputs/PokemonEggGroupsCountAggregate";
import { PokemonEggGroupsMaxAggregate } from "../outputs/PokemonEggGroupsMaxAggregate";
import { PokemonEggGroupsMinAggregate } from "../outputs/PokemonEggGroupsMinAggregate";
import { PokemonEggGroupsSumAggregate } from "../outputs/PokemonEggGroupsSumAggregate";

@TypeGraphQL.ObjectType("PokemonEggGroupsGroupBy", {})
export class PokemonEggGroupsGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  species_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  egg_group_id!: number;

  @TypeGraphQL.Field(_type => PokemonEggGroupsCountAggregate, {
    nullable: true
  })
  _count!: PokemonEggGroupsCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonEggGroupsAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonEggGroupsAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonEggGroupsSumAggregate, {
    nullable: true
  })
  _sum!: PokemonEggGroupsSumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonEggGroupsMinAggregate, {
    nullable: true
  })
  _min!: PokemonEggGroupsMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonEggGroupsMaxAggregate, {
    nullable: true
  })
  _max!: PokemonEggGroupsMaxAggregate | null;
}
