import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateWithoutKnownMoveInput } from "../inputs/PokemonEvolutionCreateWithoutKnownMoveInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionCreateOrConnectWithoutKnownMoveInput", {})
export class PokemonEvolutionCreateOrConnectWithoutKnownMoveInput {
  @TypeGraphQL.Field(_type => PokemonEvolutionWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEvolutionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateWithoutKnownMoveInput, {
    nullable: false
  })
  create!: PokemonEvolutionCreateWithoutKnownMoveInput;
}
