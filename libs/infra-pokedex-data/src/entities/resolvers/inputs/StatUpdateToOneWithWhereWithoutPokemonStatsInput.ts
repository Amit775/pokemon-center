import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatUpdateWithoutPokemonStatsInput } from "../inputs/StatUpdateWithoutPokemonStatsInput";
import { StatWhereInput } from "../inputs/StatWhereInput";

@TypeGraphQL.InputType("StatUpdateToOneWithWhereWithoutPokemonStatsInput", {})
export class StatUpdateToOneWithWhereWithoutPokemonStatsInput {
  @TypeGraphQL.Field(_type => StatWhereInput, {
    nullable: true
  })
  where?: StatWhereInput | undefined;

  @TypeGraphQL.Field(_type => StatUpdateWithoutPokemonStatsInput, {
    nullable: false
  })
  data!: StatUpdateWithoutPokemonStatsInput;
}
