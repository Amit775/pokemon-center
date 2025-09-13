import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormGenerationsCreateWithoutPokemonFormInput } from "../inputs/PokemonFormGenerationsCreateWithoutPokemonFormInput";
import { PokemonFormGenerationsWhereUniqueInput } from "../inputs/PokemonFormGenerationsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormGenerationsCreateOrConnectWithoutPokemonFormInput", {})
export class PokemonFormGenerationsCreateOrConnectWithoutPokemonFormInput {
  @TypeGraphQL.Field(_type => PokemonFormGenerationsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormGenerationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsCreateWithoutPokemonFormInput, {
    nullable: false
  })
  create!: PokemonFormGenerationsCreateWithoutPokemonFormInput;
}
