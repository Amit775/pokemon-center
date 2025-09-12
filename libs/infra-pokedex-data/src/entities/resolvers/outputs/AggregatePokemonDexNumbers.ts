import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonDexNumbersAvgAggregate } from "../outputs/PokemonDexNumbersAvgAggregate";
import { PokemonDexNumbersCountAggregate } from "../outputs/PokemonDexNumbersCountAggregate";
import { PokemonDexNumbersMaxAggregate } from "../outputs/PokemonDexNumbersMaxAggregate";
import { PokemonDexNumbersMinAggregate } from "../outputs/PokemonDexNumbersMinAggregate";
import { PokemonDexNumbersSumAggregate } from "../outputs/PokemonDexNumbersSumAggregate";

@TypeGraphQL.ObjectType("AggregatePokemonDexNumbers", {})
export class AggregatePokemonDexNumbers {
  @TypeGraphQL.Field(_type => PokemonDexNumbersCountAggregate, {
    nullable: true
  })
  _count!: PokemonDexNumbersCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonDexNumbersAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonDexNumbersAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonDexNumbersSumAggregate, {
    nullable: true
  })
  _sum!: PokemonDexNumbersSumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonDexNumbersMinAggregate, {
    nullable: true
  })
  _min!: PokemonDexNumbersMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonDexNumbersMaxAggregate, {
    nullable: true
  })
  _max!: PokemonDexNumbersMaxAggregate | null;
}
