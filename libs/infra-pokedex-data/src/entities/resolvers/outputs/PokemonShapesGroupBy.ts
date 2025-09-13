import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonShapesAvgAggregate } from "../outputs/PokemonShapesAvgAggregate";
import { PokemonShapesCountAggregate } from "../outputs/PokemonShapesCountAggregate";
import { PokemonShapesMaxAggregate } from "../outputs/PokemonShapesMaxAggregate";
import { PokemonShapesMinAggregate } from "../outputs/PokemonShapesMinAggregate";
import { PokemonShapesSumAggregate } from "../outputs/PokemonShapesSumAggregate";

@TypeGraphQL.ObjectType("PokemonShapesGroupBy", {})
export class PokemonShapesGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => PokemonShapesCountAggregate, {
    nullable: true
  })
  _count!: PokemonShapesCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonShapesAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonShapesAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonShapesSumAggregate, {
    nullable: true
  })
  _sum!: PokemonShapesSumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonShapesMinAggregate, {
    nullable: true
  })
  _min!: PokemonShapesMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonShapesMaxAggregate, {
    nullable: true
  })
  _max!: PokemonShapesMaxAggregate | null;
}
