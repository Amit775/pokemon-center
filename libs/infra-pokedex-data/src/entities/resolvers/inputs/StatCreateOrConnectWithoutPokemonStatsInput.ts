import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatCreateWithoutPokemonStatsInput } from "../inputs/StatCreateWithoutPokemonStatsInput";
import { StatWhereUniqueInput } from "../inputs/StatWhereUniqueInput";

@TypeGraphQL.InputType("StatCreateOrConnectWithoutPokemonStatsInput", {})
export class StatCreateOrConnectWithoutPokemonStatsInput {
  @TypeGraphQL.Field(_type => StatWhereUniqueInput, {
    nullable: false
  })
  where!: StatWhereUniqueInput;

  @TypeGraphQL.Field(_type => StatCreateWithoutPokemonStatsInput, {
    nullable: false
  })
  create!: StatCreateWithoutPokemonStatsInput;
}
