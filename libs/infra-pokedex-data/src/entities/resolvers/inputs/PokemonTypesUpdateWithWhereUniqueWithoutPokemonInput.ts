import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonTypesUpdateWithoutPokemonInput } from "../inputs/PokemonTypesUpdateWithoutPokemonInput";
import { PokemonTypesWhereUniqueInput } from "../inputs/PokemonTypesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonTypesUpdateWithWhereUniqueWithoutPokemonInput", {})
export class PokemonTypesUpdateWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonTypesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonTypesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonTypesUpdateWithoutPokemonInput, {
    nullable: false
  })
  data!: PokemonTypesUpdateWithoutPokemonInput;
}
