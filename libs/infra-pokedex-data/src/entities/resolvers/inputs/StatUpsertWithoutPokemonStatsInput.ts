import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatCreateWithoutPokemonStatsInput } from "../inputs/StatCreateWithoutPokemonStatsInput";
import { StatUpdateWithoutPokemonStatsInput } from "../inputs/StatUpdateWithoutPokemonStatsInput";
import { StatWhereInput } from "../inputs/StatWhereInput";

@TypeGraphQL.InputType("StatUpsertWithoutPokemonStatsInput", {})
export class StatUpsertWithoutPokemonStatsInput {
  @TypeGraphQL.Field(_type => StatUpdateWithoutPokemonStatsInput, {
    nullable: false
  })
  update!: StatUpdateWithoutPokemonStatsInput;

  @TypeGraphQL.Field(_type => StatCreateWithoutPokemonStatsInput, {
    nullable: false
  })
  create!: StatCreateWithoutPokemonStatsInput;

  @TypeGraphQL.Field(_type => StatWhereInput, {
    nullable: true
  })
  where?: StatWhereInput | undefined;
}
