import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAbilitiesAvgAggregate } from "../outputs/PokemonAbilitiesAvgAggregate";
import { PokemonAbilitiesCountAggregate } from "../outputs/PokemonAbilitiesCountAggregate";
import { PokemonAbilitiesMaxAggregate } from "../outputs/PokemonAbilitiesMaxAggregate";
import { PokemonAbilitiesMinAggregate } from "../outputs/PokemonAbilitiesMinAggregate";
import { PokemonAbilitiesSumAggregate } from "../outputs/PokemonAbilitiesSumAggregate";

@TypeGraphQL.ObjectType("AggregatePokemonAbilities", {})
export class AggregatePokemonAbilities {
  @TypeGraphQL.Field(_type => PokemonAbilitiesCountAggregate, {
    nullable: true
  })
  _count!: PokemonAbilitiesCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonAbilitiesAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonAbilitiesAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonAbilitiesSumAggregate, {
    nullable: true
  })
  _sum!: PokemonAbilitiesSumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonAbilitiesMinAggregate, {
    nullable: true
  })
  _min!: PokemonAbilitiesMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonAbilitiesMaxAggregate, {
    nullable: true
  })
  _max!: PokemonAbilitiesMaxAggregate | null;
}
