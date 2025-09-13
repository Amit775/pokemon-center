import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonDexNumbersUpdateWithoutSpeciesInput } from "../inputs/PokemonDexNumbersUpdateWithoutSpeciesInput";
import { PokemonDexNumbersWhereUniqueInput } from "../inputs/PokemonDexNumbersWhereUniqueInput";

@TypeGraphQL.InputType("PokemonDexNumbersUpdateWithWhereUniqueWithoutSpeciesInput", {})
export class PokemonDexNumbersUpdateWithWhereUniqueWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonDexNumbersWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonDexNumbersWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonDexNumbersUpdateWithoutSpeciesInput, {
    nullable: false
  })
  data!: PokemonDexNumbersUpdateWithoutSpeciesInput;
}
