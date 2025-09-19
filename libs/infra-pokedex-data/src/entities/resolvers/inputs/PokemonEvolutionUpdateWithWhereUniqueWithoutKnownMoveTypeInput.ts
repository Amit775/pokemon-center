import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionUpdateWithoutKnownMoveTypeInput } from "../inputs/PokemonEvolutionUpdateWithoutKnownMoveTypeInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionUpdateWithWhereUniqueWithoutKnownMoveTypeInput", {})
export class PokemonEvolutionUpdateWithWhereUniqueWithoutKnownMoveTypeInput {
  @TypeGraphQL.Field(_type => PokemonEvolutionWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEvolutionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateWithoutKnownMoveTypeInput, {
    nullable: false
  })
  data!: PokemonEvolutionUpdateWithoutKnownMoveTypeInput;
}
