import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonDexNumberCreateWithoutSpeciesInput } from "../inputs/PokemonDexNumberCreateWithoutSpeciesInput";
import { PokemonDexNumberUpdateWithoutSpeciesInput } from "../inputs/PokemonDexNumberUpdateWithoutSpeciesInput";
import { PokemonDexNumberWhereUniqueInput } from "../inputs/PokemonDexNumberWhereUniqueInput";

@TypeGraphQL.InputType("PokemonDexNumberUpsertWithWhereUniqueWithoutSpeciesInput", {})
export class PokemonDexNumberUpsertWithWhereUniqueWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonDexNumberWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonDexNumberWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonDexNumberUpdateWithoutSpeciesInput, {
    nullable: false
  })
  update!: PokemonDexNumberUpdateWithoutSpeciesInput;

  @TypeGraphQL.Field(_type => PokemonDexNumberCreateWithoutSpeciesInput, {
    nullable: false
  })
  create!: PokemonDexNumberCreateWithoutSpeciesInput;
}
