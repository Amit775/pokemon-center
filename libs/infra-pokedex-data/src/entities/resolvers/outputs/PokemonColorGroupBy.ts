import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonColorAvgAggregate } from "../outputs/PokemonColorAvgAggregate";
import { PokemonColorCountAggregate } from "../outputs/PokemonColorCountAggregate";
import { PokemonColorMaxAggregate } from "../outputs/PokemonColorMaxAggregate";
import { PokemonColorMinAggregate } from "../outputs/PokemonColorMinAggregate";
import { PokemonColorSumAggregate } from "../outputs/PokemonColorSumAggregate";

@TypeGraphQL.ObjectType("PokemonColorGroupBy", {})
export class PokemonColorGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => PokemonColorCountAggregate, {
    nullable: true
  })
  _count!: PokemonColorCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonColorAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonColorAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonColorSumAggregate, {
    nullable: true
  })
  _sum!: PokemonColorSumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonColorMinAggregate, {
    nullable: true
  })
  _min!: PokemonColorMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonColorMaxAggregate, {
    nullable: true
  })
  _max!: PokemonColorMaxAggregate | null;
}
