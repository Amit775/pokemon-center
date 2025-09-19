import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormAvgAggregate } from "../outputs/PokemonFormAvgAggregate";
import { PokemonFormCountAggregate } from "../outputs/PokemonFormCountAggregate";
import { PokemonFormMaxAggregate } from "../outputs/PokemonFormMaxAggregate";
import { PokemonFormMinAggregate } from "../outputs/PokemonFormMinAggregate";
import { PokemonFormSumAggregate } from "../outputs/PokemonFormSumAggregate";

@TypeGraphQL.ObjectType("AggregatePokemonForm", {})
export class AggregatePokemonForm {
  @TypeGraphQL.Field(_type => PokemonFormCountAggregate, {
    nullable: true
  })
  _count!: PokemonFormCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonFormAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonFormAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonFormSumAggregate, {
    nullable: true
  })
  _sum!: PokemonFormSumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonFormMinAggregate, {
    nullable: true
  })
  _min!: PokemonFormMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonFormMaxAggregate, {
    nullable: true
  })
  _max!: PokemonFormMaxAggregate | null;
}
