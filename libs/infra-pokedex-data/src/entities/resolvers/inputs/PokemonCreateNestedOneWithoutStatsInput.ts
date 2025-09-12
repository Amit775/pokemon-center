import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateOrConnectWithoutStatsInput } from "../inputs/PokemonCreateOrConnectWithoutStatsInput";
import { PokemonCreateWithoutStatsInput } from "../inputs/PokemonCreateWithoutStatsInput";
import { PokemonWhereUniqueInput } from "../inputs/PokemonWhereUniqueInput";

@TypeGraphQL.InputType("PokemonCreateNestedOneWithoutStatsInput", {})
export class PokemonCreateNestedOneWithoutStatsInput {
  @TypeGraphQL.Field(_type => PokemonCreateWithoutStatsInput, {
    nullable: true
  })
  create?: PokemonCreateWithoutStatsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonCreateOrConnectWithoutStatsInput, {
    nullable: true
  })
  connectOrCreate?: PokemonCreateOrConnectWithoutStatsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonWhereUniqueInput | undefined;
}
