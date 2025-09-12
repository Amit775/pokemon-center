import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonDexNumbersScalarWhereInput } from "../inputs/PokemonDexNumbersScalarWhereInput";
import { PokemonDexNumbersUpdateManyMutationInput } from "../inputs/PokemonDexNumbersUpdateManyMutationInput";

@TypeGraphQL.InputType("PokemonDexNumbersUpdateManyWithWhereWithoutPokedexInput", {})
export class PokemonDexNumbersUpdateManyWithWhereWithoutPokedexInput {
  @TypeGraphQL.Field(_type => PokemonDexNumbersScalarWhereInput, {
    nullable: false
  })
  where!: PokemonDexNumbersScalarWhereInput;

  @TypeGraphQL.Field(_type => PokemonDexNumbersUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonDexNumbersUpdateManyMutationInput;
}
