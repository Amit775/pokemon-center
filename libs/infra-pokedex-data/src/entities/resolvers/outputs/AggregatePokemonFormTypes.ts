import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormTypesAvgAggregate } from "../outputs/PokemonFormTypesAvgAggregate";
import { PokemonFormTypesCountAggregate } from "../outputs/PokemonFormTypesCountAggregate";
import { PokemonFormTypesMaxAggregate } from "../outputs/PokemonFormTypesMaxAggregate";
import { PokemonFormTypesMinAggregate } from "../outputs/PokemonFormTypesMinAggregate";
import { PokemonFormTypesSumAggregate } from "../outputs/PokemonFormTypesSumAggregate";

@TypeGraphQL.ObjectType("AggregatePokemonFormTypes", {})
export class AggregatePokemonFormTypes {
  @TypeGraphQL.Field(_type => PokemonFormTypesCountAggregate, {
    nullable: true
  })
  _count!: PokemonFormTypesCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonFormTypesAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonFormTypesAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonFormTypesSumAggregate, {
    nullable: true
  })
  _sum!: PokemonFormTypesSumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonFormTypesMinAggregate, {
    nullable: true
  })
  _min!: PokemonFormTypesMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonFormTypesMaxAggregate, {
    nullable: true
  })
  _max!: PokemonFormTypesMaxAggregate | null;
}
