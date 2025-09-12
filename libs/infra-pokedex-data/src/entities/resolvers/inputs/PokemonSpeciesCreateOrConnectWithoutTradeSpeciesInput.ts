import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateWithoutTradeSpeciesInput } from "../inputs/PokemonSpeciesCreateWithoutTradeSpeciesInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesCreateOrConnectWithoutTradeSpeciesInput", {})
export class PokemonSpeciesCreateOrConnectWithoutTradeSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonSpeciesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateWithoutTradeSpeciesInput, {
    nullable: false
  })
  create!: PokemonSpeciesCreateWithoutTradeSpeciesInput;
}
