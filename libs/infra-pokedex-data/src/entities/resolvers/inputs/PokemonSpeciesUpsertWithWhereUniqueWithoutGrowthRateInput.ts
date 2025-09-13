import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateWithoutGrowthRateInput } from "../inputs/PokemonSpeciesCreateWithoutGrowthRateInput";
import { PokemonSpeciesUpdateWithoutGrowthRateInput } from "../inputs/PokemonSpeciesUpdateWithoutGrowthRateInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesUpsertWithWhereUniqueWithoutGrowthRateInput", {})
export class PokemonSpeciesUpsertWithWhereUniqueWithoutGrowthRateInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonSpeciesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateWithoutGrowthRateInput, {
    nullable: false
  })
  update!: PokemonSpeciesUpdateWithoutGrowthRateInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateWithoutGrowthRateInput, {
    nullable: false
  })
  create!: PokemonSpeciesCreateWithoutGrowthRateInput;
}
