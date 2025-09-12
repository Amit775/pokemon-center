import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateOrConnectWithoutEvolutionInput } from "../inputs/PokemonSpeciesCreateOrConnectWithoutEvolutionInput";
import { PokemonSpeciesCreateWithoutEvolutionInput } from "../inputs/PokemonSpeciesCreateWithoutEvolutionInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesCreateNestedOneWithoutEvolutionInput", {})
export class PokemonSpeciesCreateNestedOneWithoutEvolutionInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesCreateWithoutEvolutionInput, {
    nullable: true
  })
  create?: PokemonSpeciesCreateWithoutEvolutionInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateOrConnectWithoutEvolutionInput, {
    nullable: true
  })
  connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutEvolutionInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonSpeciesWhereUniqueInput | undefined;
}
