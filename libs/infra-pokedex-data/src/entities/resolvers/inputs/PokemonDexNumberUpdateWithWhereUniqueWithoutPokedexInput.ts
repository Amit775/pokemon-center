import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonDexNumberUpdateWithoutPokedexInput } from "../inputs/PokemonDexNumberUpdateWithoutPokedexInput";
import { PokemonDexNumberWhereUniqueInput } from "../inputs/PokemonDexNumberWhereUniqueInput";

@TypeGraphQL.InputType("PokemonDexNumberUpdateWithWhereUniqueWithoutPokedexInput", {})
export class PokemonDexNumberUpdateWithWhereUniqueWithoutPokedexInput {
  @TypeGraphQL.Field(_type => PokemonDexNumberWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonDexNumberWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonDexNumberUpdateWithoutPokedexInput, {
    nullable: false
  })
  data!: PokemonDexNumberUpdateWithoutPokedexInput;
}
