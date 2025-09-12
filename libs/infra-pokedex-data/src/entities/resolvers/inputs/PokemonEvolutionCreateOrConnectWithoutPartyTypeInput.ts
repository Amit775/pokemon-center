import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateWithoutPartyTypeInput } from "../inputs/PokemonEvolutionCreateWithoutPartyTypeInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionCreateOrConnectWithoutPartyTypeInput", {})
export class PokemonEvolutionCreateOrConnectWithoutPartyTypeInput {
  @TypeGraphQL.Field(_type => PokemonEvolutionWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEvolutionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateWithoutPartyTypeInput, {
    nullable: false
  })
  create!: PokemonEvolutionCreateWithoutPartyTypeInput;
}
