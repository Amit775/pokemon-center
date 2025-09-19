import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormGenerationCreateWithoutPokemonFormInput } from "../inputs/PokemonFormGenerationCreateWithoutPokemonFormInput";
import { PokemonFormGenerationUpdateWithoutPokemonFormInput } from "../inputs/PokemonFormGenerationUpdateWithoutPokemonFormInput";
import { PokemonFormGenerationWhereUniqueInput } from "../inputs/PokemonFormGenerationWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormGenerationUpsertWithWhereUniqueWithoutPokemonFormInput", {})
export class PokemonFormGenerationUpsertWithWhereUniqueWithoutPokemonFormInput {
  @TypeGraphQL.Field(_type => PokemonFormGenerationWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormGenerationWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormGenerationUpdateWithoutPokemonFormInput, {
    nullable: false
  })
  update!: PokemonFormGenerationUpdateWithoutPokemonFormInput;

  @TypeGraphQL.Field(_type => PokemonFormGenerationCreateWithoutPokemonFormInput, {
    nullable: false
  })
  create!: PokemonFormGenerationCreateWithoutPokemonFormInput;
}
