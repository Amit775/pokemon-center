import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateWithoutKnownMoveTypeInput } from "../inputs/PokemonEvolutionCreateWithoutKnownMoveTypeInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionCreateOrConnectWithoutKnownMoveTypeInput", {})
export class PokemonEvolutionCreateOrConnectWithoutKnownMoveTypeInput {
  @TypeGraphQL.Field(_type => PokemonEvolutionWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEvolutionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateWithoutKnownMoveTypeInput, {
    nullable: false
  })
  create!: PokemonEvolutionCreateWithoutKnownMoveTypeInput;
}
