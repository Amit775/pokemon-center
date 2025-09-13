import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormTypesUpdateWithoutPokemonFormInput } from "../inputs/PokemonFormTypesUpdateWithoutPokemonFormInput";
import { PokemonFormTypesWhereUniqueInput } from "../inputs/PokemonFormTypesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormTypesUpdateWithWhereUniqueWithoutPokemonFormInput", {})
export class PokemonFormTypesUpdateWithWhereUniqueWithoutPokemonFormInput {
  @TypeGraphQL.Field(_type => PokemonFormTypesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormTypesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormTypesUpdateWithoutPokemonFormInput, {
    nullable: false
  })
  data!: PokemonFormTypesUpdateWithoutPokemonFormInput;
}
