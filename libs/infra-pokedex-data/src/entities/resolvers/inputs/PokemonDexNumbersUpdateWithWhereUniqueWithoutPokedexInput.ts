import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonDexNumbersUpdateWithoutPokedexInput } from "../inputs/PokemonDexNumbersUpdateWithoutPokedexInput";
import { PokemonDexNumbersWhereUniqueInput } from "../inputs/PokemonDexNumbersWhereUniqueInput";

@TypeGraphQL.InputType("PokemonDexNumbersUpdateWithWhereUniqueWithoutPokedexInput", {})
export class PokemonDexNumbersUpdateWithWhereUniqueWithoutPokedexInput {
  @TypeGraphQL.Field(_type => PokemonDexNumbersWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonDexNumbersWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonDexNumbersUpdateWithoutPokedexInput, {
    nullable: false
  })
  data!: PokemonDexNumbersUpdateWithoutPokedexInput;
}
