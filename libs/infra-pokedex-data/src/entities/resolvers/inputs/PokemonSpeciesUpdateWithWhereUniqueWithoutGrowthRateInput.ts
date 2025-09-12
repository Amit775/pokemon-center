import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesUpdateWithoutGrowthRateInput } from "../inputs/PokemonSpeciesUpdateWithoutGrowthRateInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesUpdateWithWhereUniqueWithoutGrowthRateInput", {})
export class PokemonSpeciesUpdateWithWhereUniqueWithoutGrowthRateInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonSpeciesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateWithoutGrowthRateInput, {
    nullable: false
  })
  data!: PokemonSpeciesUpdateWithoutGrowthRateInput;
}
