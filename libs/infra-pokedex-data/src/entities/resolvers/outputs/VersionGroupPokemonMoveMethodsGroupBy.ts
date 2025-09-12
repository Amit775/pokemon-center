import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupPokemonMoveMethodsAvgAggregate } from "../outputs/VersionGroupPokemonMoveMethodsAvgAggregate";
import { VersionGroupPokemonMoveMethodsCountAggregate } from "../outputs/VersionGroupPokemonMoveMethodsCountAggregate";
import { VersionGroupPokemonMoveMethodsMaxAggregate } from "../outputs/VersionGroupPokemonMoveMethodsMaxAggregate";
import { VersionGroupPokemonMoveMethodsMinAggregate } from "../outputs/VersionGroupPokemonMoveMethodsMinAggregate";
import { VersionGroupPokemonMoveMethodsSumAggregate } from "../outputs/VersionGroupPokemonMoveMethodsSumAggregate";

@TypeGraphQL.ObjectType("VersionGroupPokemonMoveMethodsGroupBy", {})
export class VersionGroupPokemonMoveMethodsGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  version_group_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokemon_move_method_id!: number;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsCountAggregate, {
    nullable: true
  })
  _count!: VersionGroupPokemonMoveMethodsCountAggregate | null;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsAvgAggregate, {
    nullable: true
  })
  _avg!: VersionGroupPokemonMoveMethodsAvgAggregate | null;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsSumAggregate, {
    nullable: true
  })
  _sum!: VersionGroupPokemonMoveMethodsSumAggregate | null;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsMinAggregate, {
    nullable: true
  })
  _min!: VersionGroupPokemonMoveMethodsMinAggregate | null;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsMaxAggregate, {
    nullable: true
  })
  _max!: VersionGroupPokemonMoveMethodsMaxAggregate | null;
}
