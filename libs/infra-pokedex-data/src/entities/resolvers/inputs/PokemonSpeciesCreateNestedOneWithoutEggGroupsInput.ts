import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateOrConnectWithoutEggGroupsInput } from "../inputs/PokemonSpeciesCreateOrConnectWithoutEggGroupsInput";
import { PokemonSpeciesCreateWithoutEggGroupsInput } from "../inputs/PokemonSpeciesCreateWithoutEggGroupsInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesCreateNestedOneWithoutEggGroupsInput", {})
export class PokemonSpeciesCreateNestedOneWithoutEggGroupsInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesCreateWithoutEggGroupsInput, {
    nullable: true
  })
  create?: PokemonSpeciesCreateWithoutEggGroupsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateOrConnectWithoutEggGroupsInput, {
    nullable: true
  })
  connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutEggGroupsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonSpeciesWhereUniqueInput | undefined;
}
