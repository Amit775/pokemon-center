import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonStatCreateWithoutPokemonInput } from "../inputs/PokemonStatCreateWithoutPokemonInput";
import { PokemonStatWhereUniqueInput } from "../inputs/PokemonStatWhereUniqueInput";

@TypeGraphQL.InputType("PokemonStatCreateOrConnectWithoutPokemonInput", {})
export class PokemonStatCreateOrConnectWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonStatWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonStatWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonStatCreateWithoutPokemonInput, {
    nullable: false
  })
  create!: PokemonStatCreateWithoutPokemonInput;
}
