import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupPokemonMoveMethodAvgAggregate } from "../outputs/VersionGroupPokemonMoveMethodAvgAggregate";
import { VersionGroupPokemonMoveMethodCountAggregate } from "../outputs/VersionGroupPokemonMoveMethodCountAggregate";
import { VersionGroupPokemonMoveMethodMaxAggregate } from "../outputs/VersionGroupPokemonMoveMethodMaxAggregate";
import { VersionGroupPokemonMoveMethodMinAggregate } from "../outputs/VersionGroupPokemonMoveMethodMinAggregate";
import { VersionGroupPokemonMoveMethodSumAggregate } from "../outputs/VersionGroupPokemonMoveMethodSumAggregate";

@TypeGraphQL.ObjectType("VersionGroupPokemonMoveMethodGroupBy", {})
export class VersionGroupPokemonMoveMethodGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  version_group_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokemon_move_method_id!: number;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodCountAggregate, {
    nullable: true
  })
  _count!: VersionGroupPokemonMoveMethodCountAggregate | null;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodAvgAggregate, {
    nullable: true
  })
  _avg!: VersionGroupPokemonMoveMethodAvgAggregate | null;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodSumAggregate, {
    nullable: true
  })
  _sum!: VersionGroupPokemonMoveMethodSumAggregate | null;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodMinAggregate, {
    nullable: true
  })
  _min!: VersionGroupPokemonMoveMethodMinAggregate | null;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodMaxAggregate, {
    nullable: true
  })
  _max!: VersionGroupPokemonMoveMethodMaxAggregate | null;
}
