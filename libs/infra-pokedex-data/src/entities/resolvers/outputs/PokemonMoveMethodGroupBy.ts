import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveMethodAvgAggregate } from "../outputs/PokemonMoveMethodAvgAggregate";
import { PokemonMoveMethodCountAggregate } from "../outputs/PokemonMoveMethodCountAggregate";
import { PokemonMoveMethodMaxAggregate } from "../outputs/PokemonMoveMethodMaxAggregate";
import { PokemonMoveMethodMinAggregate } from "../outputs/PokemonMoveMethodMinAggregate";
import { PokemonMoveMethodSumAggregate } from "../outputs/PokemonMoveMethodSumAggregate";

@TypeGraphQL.ObjectType("PokemonMoveMethodGroupBy", {})
export class PokemonMoveMethodGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => PokemonMoveMethodCountAggregate, {
    nullable: true
  })
  _count!: PokemonMoveMethodCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonMoveMethodAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonMoveMethodAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonMoveMethodSumAggregate, {
    nullable: true
  })
  _sum!: PokemonMoveMethodSumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonMoveMethodMinAggregate, {
    nullable: true
  })
  _min!: PokemonMoveMethodMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonMoveMethodMaxAggregate, {
    nullable: true
  })
  _max!: PokemonMoveMethodMaxAggregate | null;
}
