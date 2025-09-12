import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateWithoutPartySpeciesInput } from "../inputs/PokemonEvolutionCreateWithoutPartySpeciesInput";
import { PokemonEvolutionUpdateWithoutPartySpeciesInput } from "../inputs/PokemonEvolutionUpdateWithoutPartySpeciesInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionUpsertWithWhereUniqueWithoutPartySpeciesInput", {})
export class PokemonEvolutionUpsertWithWhereUniqueWithoutPartySpeciesInput {
  @TypeGraphQL.Field(_type => PokemonEvolutionWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEvolutionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateWithoutPartySpeciesInput, {
    nullable: false
  })
  update!: PokemonEvolutionUpdateWithoutPartySpeciesInput;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateWithoutPartySpeciesInput, {
    nullable: false
  })
  create!: PokemonEvolutionCreateWithoutPartySpeciesInput;
}
