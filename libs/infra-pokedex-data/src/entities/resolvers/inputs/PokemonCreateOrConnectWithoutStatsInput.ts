import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateWithoutStatsInput } from "../inputs/PokemonCreateWithoutStatsInput";
import { PokemonWhereUniqueInput } from "../inputs/PokemonWhereUniqueInput";

@TypeGraphQL.InputType("PokemonCreateOrConnectWithoutStatsInput", {})
export class PokemonCreateOrConnectWithoutStatsInput {
  @TypeGraphQL.Field(_type => PokemonWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonCreateWithoutStatsInput, {
    nullable: false
  })
  create!: PokemonCreateWithoutStatsInput;
}
