import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonTypeAvgAggregate } from "../outputs/PokemonTypeAvgAggregate";
import { PokemonTypeCountAggregate } from "../outputs/PokemonTypeCountAggregate";
import { PokemonTypeMaxAggregate } from "../outputs/PokemonTypeMaxAggregate";
import { PokemonTypeMinAggregate } from "../outputs/PokemonTypeMinAggregate";
import { PokemonTypeSumAggregate } from "../outputs/PokemonTypeSumAggregate";

@TypeGraphQL.ObjectType("AggregatePokemonType", {})
export class AggregatePokemonType {
  @TypeGraphQL.Field(_type => PokemonTypeCountAggregate, {
    nullable: true
  })
  _count!: PokemonTypeCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonTypeAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonTypeAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonTypeSumAggregate, {
    nullable: true
  })
  _sum!: PokemonTypeSumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonTypeMinAggregate, {
    nullable: true
  })
  _min!: PokemonTypeMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonTypeMaxAggregate, {
    nullable: true
  })
  _max!: PokemonTypeMaxAggregate | null;
}
