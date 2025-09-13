import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormsAvgAggregate } from "../outputs/PokemonFormsAvgAggregate";
import { PokemonFormsCountAggregate } from "../outputs/PokemonFormsCountAggregate";
import { PokemonFormsMaxAggregate } from "../outputs/PokemonFormsMaxAggregate";
import { PokemonFormsMinAggregate } from "../outputs/PokemonFormsMinAggregate";
import { PokemonFormsSumAggregate } from "../outputs/PokemonFormsSumAggregate";

@TypeGraphQL.ObjectType("PokemonFormsGroupBy", {})
export class PokemonFormsGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  form_identifier!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokemon_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  introduced_in_version_group_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  is_default!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  is_battle_only!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  is_mega!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  form_order!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  order!: number;

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
