import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonTypesAvgAggregate } from "../outputs/PokemonTypesAvgAggregate";
import { PokemonTypesCountAggregate } from "../outputs/PokemonTypesCountAggregate";
import { PokemonTypesMaxAggregate } from "../outputs/PokemonTypesMaxAggregate";
import { PokemonTypesMinAggregate } from "../outputs/PokemonTypesMinAggregate";
import { PokemonTypesSumAggregate } from "../outputs/PokemonTypesSumAggregate";

@TypeGraphQL.ObjectType("AggregatePokemonTypes", {})
export class AggregatePokemonTypes {
  @TypeGraphQL.Field(_type => PokemonTypesCountAggregate, {
    nullable: true
  })
  _count!: PokemonTypesCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonTypesAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonTypesAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonTypesSumAggregate, {
    nullable: true
  })
  _sum!: PokemonTypesSumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonTypesMinAggregate, {
    nullable: true
  })
  _min!: PokemonTypesMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonTypesMaxAggregate, {
    nullable: true
  })
  _max!: PokemonTypesMaxAggregate | null;
}
