import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormGenerationCreateWithoutPokemonFormInput } from "../inputs/PokemonFormGenerationCreateWithoutPokemonFormInput";
import { PokemonFormGenerationWhereUniqueInput } from "../inputs/PokemonFormGenerationWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormGenerationCreateOrConnectWithoutPokemonFormInput", {})
export class PokemonFormGenerationCreateOrConnectWithoutPokemonFormInput {
  @TypeGraphQL.Field(_type => PokemonFormGenerationWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormGenerationWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormGenerationCreateWithoutPokemonFormInput, {
    nullable: false
  })
  create!: PokemonFormGenerationCreateWithoutPokemonFormInput;
}
