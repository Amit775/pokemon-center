import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateWithoutTradeSpeciesInput } from "../inputs/PokemonEvolutionCreateWithoutTradeSpeciesInput";
import { PokemonEvolutionUpdateWithoutTradeSpeciesInput } from "../inputs/PokemonEvolutionUpdateWithoutTradeSpeciesInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionUpsertWithWhereUniqueWithoutTradeSpeciesInput", {})
export class PokemonEvolutionUpsertWithWhereUniqueWithoutTradeSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonEvolutionWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEvolutionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateWithoutTradeSpeciesInput, {
    nullable: false
  })
  update!: PokemonEvolutionUpdateWithoutTradeSpeciesInput;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateWithoutTradeSpeciesInput, {
    nullable: false
  })
  create!: PokemonEvolutionCreateWithoutTradeSpeciesInput;
}
