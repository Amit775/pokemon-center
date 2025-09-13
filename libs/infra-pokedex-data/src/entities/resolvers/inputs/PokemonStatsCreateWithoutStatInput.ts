import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateNestedOneWithoutStatsInput } from "../inputs/PokemonCreateNestedOneWithoutStatsInput";

@TypeGraphQL.InputType("PokemonStatsCreateWithoutStatInput", {})
export class PokemonStatsCreateWithoutStatInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  base_stat!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  effort!: number;

  @TypeGraphQL.Field(_type => PokemonCreateNestedOneWithoutStatsInput, {
    nullable: false
  })
  pokemon!: PokemonCreateNestedOneWithoutStatsInput;
}
