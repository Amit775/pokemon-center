import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateWithoutPartySpeciesInput } from "../inputs/PokemonSpeciesCreateWithoutPartySpeciesInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesCreateOrConnectWithoutPartySpeciesInput", {})
export class PokemonSpeciesCreateOrConnectWithoutPartySpeciesInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonSpeciesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateWithoutPartySpeciesInput, {
    nullable: false
  })
  create!: PokemonSpeciesCreateWithoutPartySpeciesInput;
}
