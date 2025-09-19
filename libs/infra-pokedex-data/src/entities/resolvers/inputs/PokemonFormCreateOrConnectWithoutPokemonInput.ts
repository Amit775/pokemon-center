import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormCreateWithoutPokemonInput } from "../inputs/PokemonFormCreateWithoutPokemonInput";
import { PokemonFormWhereUniqueInput } from "../inputs/PokemonFormWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormCreateOrConnectWithoutPokemonInput", {})
export class PokemonFormCreateOrConnectWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonFormWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormCreateWithoutPokemonInput, {
    nullable: false
  })
  create!: PokemonFormCreateWithoutPokemonInput;
}
