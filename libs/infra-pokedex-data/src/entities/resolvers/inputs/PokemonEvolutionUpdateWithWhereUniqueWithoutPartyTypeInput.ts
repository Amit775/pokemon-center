import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionUpdateWithoutPartyTypeInput } from "../inputs/PokemonEvolutionUpdateWithoutPartyTypeInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionUpdateWithWhereUniqueWithoutPartyTypeInput", {})
export class PokemonEvolutionUpdateWithWhereUniqueWithoutPartyTypeInput {
  @TypeGraphQL.Field(_type => PokemonEvolutionWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEvolutionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateWithoutPartyTypeInput, {
    nullable: false
  })
  data!: PokemonEvolutionUpdateWithoutPartyTypeInput;
}
