import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionUpdateWithoutKnownMoveInput } from "../inputs/PokemonEvolutionUpdateWithoutKnownMoveInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionUpdateWithWhereUniqueWithoutKnownMoveInput", {})
export class PokemonEvolutionUpdateWithWhereUniqueWithoutKnownMoveInput {
  @TypeGraphQL.Field(_type => PokemonEvolutionWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEvolutionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateWithoutKnownMoveInput, {
    nullable: false
  })
  data!: PokemonEvolutionUpdateWithoutKnownMoveInput;
}
