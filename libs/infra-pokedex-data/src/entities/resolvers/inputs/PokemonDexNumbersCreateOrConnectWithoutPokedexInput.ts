import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonDexNumbersCreateWithoutPokedexInput } from "../inputs/PokemonDexNumbersCreateWithoutPokedexInput";
import { PokemonDexNumbersWhereUniqueInput } from "../inputs/PokemonDexNumbersWhereUniqueInput";

@TypeGraphQL.InputType("PokemonDexNumbersCreateOrConnectWithoutPokedexInput", {})
export class PokemonDexNumbersCreateOrConnectWithoutPokedexInput {
  @TypeGraphQL.Field(_type => PokemonDexNumbersWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonDexNumbersWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonDexNumbersCreateWithoutPokedexInput, {
    nullable: false
  })
  create!: PokemonDexNumbersCreateWithoutPokedexInput;
}
