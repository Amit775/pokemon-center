import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormGenerationUpdateWithoutPokemonFormInput } from "../inputs/PokemonFormGenerationUpdateWithoutPokemonFormInput";
import { PokemonFormGenerationWhereUniqueInput } from "../inputs/PokemonFormGenerationWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormGenerationUpdateWithWhereUniqueWithoutPokemonFormInput", {})
export class PokemonFormGenerationUpdateWithWhereUniqueWithoutPokemonFormInput {
  @TypeGraphQL.Field(_type => PokemonFormGenerationWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormGenerationWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormGenerationUpdateWithoutPokemonFormInput, {
    nullable: false
  })
  data!: PokemonFormGenerationUpdateWithoutPokemonFormInput;
}
