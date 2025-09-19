import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateWithoutKnownMoveInput } from "../inputs/PokemonEvolutionCreateWithoutKnownMoveInput";
import { PokemonEvolutionUpdateWithoutKnownMoveInput } from "../inputs/PokemonEvolutionUpdateWithoutKnownMoveInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionUpsertWithWhereUniqueWithoutKnownMoveInput", {})
export class PokemonEvolutionUpsertWithWhereUniqueWithoutKnownMoveInput {
  @TypeGraphQL.Field(_type => PokemonEvolutionWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEvolutionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateWithoutKnownMoveInput, {
    nullable: false
  })
  update!: PokemonEvolutionUpdateWithoutKnownMoveInput;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateWithoutKnownMoveInput, {
    nullable: false
  })
  create!: PokemonEvolutionCreateWithoutKnownMoveInput;
}
