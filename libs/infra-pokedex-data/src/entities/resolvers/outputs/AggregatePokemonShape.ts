import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonShapeAvgAggregate } from "../outputs/PokemonShapeAvgAggregate";
import { PokemonShapeCountAggregate } from "../outputs/PokemonShapeCountAggregate";
import { PokemonShapeMaxAggregate } from "../outputs/PokemonShapeMaxAggregate";
import { PokemonShapeMinAggregate } from "../outputs/PokemonShapeMinAggregate";
import { PokemonShapeSumAggregate } from "../outputs/PokemonShapeSumAggregate";

@TypeGraphQL.ObjectType("AggregatePokemonShape", {})
export class AggregatePokemonShape {
  @TypeGraphQL.Field(_type => PokemonShapeCountAggregate, {
    nullable: true
  })
  _count!: PokemonShapeCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonShapeAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonShapeAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonShapeSumAggregate, {
    nullable: true
  })
  _sum!: PokemonShapeSumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonShapeMinAggregate, {
    nullable: true
  })
  _min!: PokemonShapeMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonShapeMaxAggregate, {
    nullable: true
  })
  _max!: PokemonShapeMaxAggregate | null;
}
