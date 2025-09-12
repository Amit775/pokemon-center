import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonDexNumbersCreateWithoutSpeciesInput } from "../inputs/PokemonDexNumbersCreateWithoutSpeciesInput";
import { PokemonDexNumbersUpdateWithoutSpeciesInput } from "../inputs/PokemonDexNumbersUpdateWithoutSpeciesInput";
import { PokemonDexNumbersWhereUniqueInput } from "../inputs/PokemonDexNumbersWhereUniqueInput";

@TypeGraphQL.InputType("PokemonDexNumbersUpsertWithWhereUniqueWithoutSpeciesInput", {})
export class PokemonDexNumbersUpsertWithWhereUniqueWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonDexNumbersWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonDexNumbersWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonDexNumbersUpdateWithoutSpeciesInput, {
    nullable: false
  })
  update!: PokemonDexNumbersUpdateWithoutSpeciesInput;

  @TypeGraphQL.Field(_type => PokemonDexNumbersCreateWithoutSpeciesInput, {
    nullable: false
  })
  create!: PokemonDexNumbersCreateWithoutSpeciesInput;
}
