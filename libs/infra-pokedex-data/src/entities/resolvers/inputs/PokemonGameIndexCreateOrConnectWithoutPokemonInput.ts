import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonGameIndexCreateWithoutPokemonInput } from "../inputs/PokemonGameIndexCreateWithoutPokemonInput";
import { PokemonGameIndexWhereUniqueInput } from "../inputs/PokemonGameIndexWhereUniqueInput";

@TypeGraphQL.InputType("PokemonGameIndexCreateOrConnectWithoutPokemonInput", {})
export class PokemonGameIndexCreateOrConnectWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonGameIndexWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonGameIndexWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonGameIndexCreateWithoutPokemonInput, {
    nullable: false
  })
  create!: PokemonGameIndexCreateWithoutPokemonInput;
}
