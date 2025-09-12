import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateWithoutPartySpeciesInput } from "../inputs/PokemonEvolutionCreateWithoutPartySpeciesInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionCreateOrConnectWithoutPartySpeciesInput", {})
export class PokemonEvolutionCreateOrConnectWithoutPartySpeciesInput {
  @TypeGraphQL.Field(_type => PokemonEvolutionWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEvolutionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateWithoutPartySpeciesInput, {
    nullable: false
  })
  create!: PokemonEvolutionCreateWithoutPartySpeciesInput;
}
