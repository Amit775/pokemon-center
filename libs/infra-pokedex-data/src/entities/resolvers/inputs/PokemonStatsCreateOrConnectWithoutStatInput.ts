import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonStatsCreateWithoutStatInput } from "../inputs/PokemonStatsCreateWithoutStatInput";
import { PokemonStatsWhereUniqueInput } from "../inputs/PokemonStatsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonStatsCreateOrConnectWithoutStatInput", {})
export class PokemonStatsCreateOrConnectWithoutStatInput {
  @TypeGraphQL.Field(_type => PokemonStatsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonStatsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonStatsCreateWithoutStatInput, {
    nullable: false
  })
  create!: PokemonStatsCreateWithoutStatInput;
}
