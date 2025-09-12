import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionUpdateWithoutTradeSpeciesInput } from "../inputs/PokemonEvolutionUpdateWithoutTradeSpeciesInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionUpdateWithWhereUniqueWithoutTradeSpeciesInput", {})
export class PokemonEvolutionUpdateWithWhereUniqueWithoutTradeSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonEvolutionWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEvolutionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateWithoutTradeSpeciesInput, {
    nullable: false
  })
  data!: PokemonEvolutionUpdateWithoutTradeSpeciesInput;
}
