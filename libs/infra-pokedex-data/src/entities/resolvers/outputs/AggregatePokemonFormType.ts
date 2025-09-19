import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormTypeAvgAggregate } from "../outputs/PokemonFormTypeAvgAggregate";
import { PokemonFormTypeCountAggregate } from "../outputs/PokemonFormTypeCountAggregate";
import { PokemonFormTypeMaxAggregate } from "../outputs/PokemonFormTypeMaxAggregate";
import { PokemonFormTypeMinAggregate } from "../outputs/PokemonFormTypeMinAggregate";
import { PokemonFormTypeSumAggregate } from "../outputs/PokemonFormTypeSumAggregate";

@TypeGraphQL.ObjectType("AggregatePokemonFormType", {})
export class AggregatePokemonFormType {
  @TypeGraphQL.Field(_type => PokemonFormTypeCountAggregate, {
    nullable: true
  })
  _count!: PokemonFormTypeCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonFormTypeAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonFormTypeAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonFormTypeSumAggregate, {
    nullable: true
  })
  _sum!: PokemonFormTypeSumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonFormTypeMinAggregate, {
    nullable: true
  })
  _min!: PokemonFormTypeMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonFormTypeMaxAggregate, {
    nullable: true
  })
  _max!: PokemonFormTypeMaxAggregate | null;
}
