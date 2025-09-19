import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonDexNumberCreateWithoutPokedexInput } from "../inputs/PokemonDexNumberCreateWithoutPokedexInput";
import { PokemonDexNumberWhereUniqueInput } from "../inputs/PokemonDexNumberWhereUniqueInput";

@TypeGraphQL.InputType("PokemonDexNumberCreateOrConnectWithoutPokedexInput", {})
export class PokemonDexNumberCreateOrConnectWithoutPokedexInput {
  @TypeGraphQL.Field(_type => PokemonDexNumberWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonDexNumberWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonDexNumberCreateWithoutPokedexInput, {
    nullable: false
  })
  create!: PokemonDexNumberCreateWithoutPokedexInput;
}
