import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonStatsScalarWhereInput } from "../inputs/PokemonStatsScalarWhereInput";
import { PokemonStatsUpdateManyMutationInput } from "../inputs/PokemonStatsUpdateManyMutationInput";

@TypeGraphQL.InputType("PokemonStatsUpdateManyWithWhereWithoutPokemonInput", {})
export class PokemonStatsUpdateManyWithWhereWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonStatsScalarWhereInput, {
    nullable: false
  })
  where!: PokemonStatsScalarWhereInput;

  @TypeGraphQL.Field(_type => PokemonStatsUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonStatsUpdateManyMutationInput;
}
