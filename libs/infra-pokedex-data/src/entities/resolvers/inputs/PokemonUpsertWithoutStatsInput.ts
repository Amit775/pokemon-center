import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateWithoutStatsInput } from "../inputs/PokemonCreateWithoutStatsInput";
import { PokemonUpdateWithoutStatsInput } from "../inputs/PokemonUpdateWithoutStatsInput";
import { PokemonWhereInput } from "../inputs/PokemonWhereInput";

@TypeGraphQL.InputType("PokemonUpsertWithoutStatsInput", {})
export class PokemonUpsertWithoutStatsInput {
  @TypeGraphQL.Field(_type => PokemonUpdateWithoutStatsInput, {
    nullable: false
  })
  update!: PokemonUpdateWithoutStatsInput;

  @TypeGraphQL.Field(_type => PokemonCreateWithoutStatsInput, {
    nullable: false
  })
  create!: PokemonCreateWithoutStatsInput;

  @TypeGraphQL.Field(_type => PokemonWhereInput, {
    nullable: true
  })
  where?: PokemonWhereInput | undefined;
}
