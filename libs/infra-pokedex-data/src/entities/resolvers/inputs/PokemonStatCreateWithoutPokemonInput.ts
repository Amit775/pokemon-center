import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatCreateNestedOneWithoutPokemonStatsInput } from "../inputs/StatCreateNestedOneWithoutPokemonStatsInput";

@TypeGraphQL.InputType("PokemonStatCreateWithoutPokemonInput", {})
export class PokemonStatCreateWithoutPokemonInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  base_stat!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  effort!: number;

  @TypeGraphQL.Field(_type => StatCreateNestedOneWithoutPokemonStatsInput, {
    nullable: false
  })
  stat!: StatCreateNestedOneWithoutPokemonStatsInput;
}
