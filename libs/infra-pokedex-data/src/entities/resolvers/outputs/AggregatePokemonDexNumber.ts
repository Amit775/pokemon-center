import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonDexNumberAvgAggregate } from "../outputs/PokemonDexNumberAvgAggregate";
import { PokemonDexNumberCountAggregate } from "../outputs/PokemonDexNumberCountAggregate";
import { PokemonDexNumberMaxAggregate } from "../outputs/PokemonDexNumberMaxAggregate";
import { PokemonDexNumberMinAggregate } from "../outputs/PokemonDexNumberMinAggregate";
import { PokemonDexNumberSumAggregate } from "../outputs/PokemonDexNumberSumAggregate";

@TypeGraphQL.ObjectType("AggregatePokemonDexNumber", {})
export class AggregatePokemonDexNumber {
  @TypeGraphQL.Field(_type => PokemonDexNumberCountAggregate, {
    nullable: true
  })
  _count!: PokemonDexNumberCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonDexNumberAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonDexNumberAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonDexNumberSumAggregate, {
    nullable: true
  })
  _sum!: PokemonDexNumberSumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonDexNumberMinAggregate, {
    nullable: true
  })
  _min!: PokemonDexNumberMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonDexNumberMaxAggregate, {
    nullable: true
  })
  _max!: PokemonDexNumberMaxAggregate | null;
}
