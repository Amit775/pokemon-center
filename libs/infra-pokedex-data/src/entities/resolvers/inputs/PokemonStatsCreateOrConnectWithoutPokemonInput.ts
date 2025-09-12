import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonStatsCreateWithoutPokemonInput } from "../inputs/PokemonStatsCreateWithoutPokemonInput";
import { PokemonStatsWhereUniqueInput } from "../inputs/PokemonStatsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonStatsCreateOrConnectWithoutPokemonInput", {})
export class PokemonStatsCreateOrConnectWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonStatsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonStatsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonStatsCreateWithoutPokemonInput, {
    nullable: false
  })
  create!: PokemonStatsCreateWithoutPokemonInput;
}
