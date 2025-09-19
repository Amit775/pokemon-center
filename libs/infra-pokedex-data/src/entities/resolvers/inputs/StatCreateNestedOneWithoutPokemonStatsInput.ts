import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatCreateOrConnectWithoutPokemonStatsInput } from "../inputs/StatCreateOrConnectWithoutPokemonStatsInput";
import { StatCreateWithoutPokemonStatsInput } from "../inputs/StatCreateWithoutPokemonStatsInput";
import { StatWhereUniqueInput } from "../inputs/StatWhereUniqueInput";

@TypeGraphQL.InputType("StatCreateNestedOneWithoutPokemonStatsInput", {})
export class StatCreateNestedOneWithoutPokemonStatsInput {
  @TypeGraphQL.Field(_type => StatCreateWithoutPokemonStatsInput, {
    nullable: true
  })
  create?: StatCreateWithoutPokemonStatsInput | undefined;

  @TypeGraphQL.Field(_type => StatCreateOrConnectWithoutPokemonStatsInput, {
    nullable: true
  })
  connectOrCreate?: StatCreateOrConnectWithoutPokemonStatsInput | undefined;

  @TypeGraphQL.Field(_type => StatWhereUniqueInput, {
    nullable: true
  })
  connect?: StatWhereUniqueInput | undefined;
}
