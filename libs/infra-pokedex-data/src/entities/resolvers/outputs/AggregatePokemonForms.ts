import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormsAvgAggregate } from "../outputs/PokemonFormsAvgAggregate";
import { PokemonFormsCountAggregate } from "../outputs/PokemonFormsCountAggregate";
import { PokemonFormsMaxAggregate } from "../outputs/PokemonFormsMaxAggregate";
import { PokemonFormsMinAggregate } from "../outputs/PokemonFormsMinAggregate";
import { PokemonFormsSumAggregate } from "../outputs/PokemonFormsSumAggregate";

@TypeGraphQL.ObjectType("AggregatePokemonForms", {})
export class AggregatePokemonForms {
  @TypeGraphQL.Field(_type => PokemonFormsCountAggregate, {
    nullable: true
  })
  _count!: PokemonFormsCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonFormsAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonFormsAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonFormsSumAggregate, {
    nullable: true
  })
  _sum!: PokemonFormsSumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonFormsMinAggregate, {
    nullable: true
  })
  _min!: PokemonFormsMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonFormsMaxAggregate, {
    nullable: true
  })
  _max!: PokemonFormsMaxAggregate | null;
}
