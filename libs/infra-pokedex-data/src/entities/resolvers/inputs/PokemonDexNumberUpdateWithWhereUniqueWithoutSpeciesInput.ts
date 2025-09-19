import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonDexNumberUpdateWithoutSpeciesInput } from "../inputs/PokemonDexNumberUpdateWithoutSpeciesInput";
import { PokemonDexNumberWhereUniqueInput } from "../inputs/PokemonDexNumberWhereUniqueInput";

@TypeGraphQL.InputType("PokemonDexNumberUpdateWithWhereUniqueWithoutSpeciesInput", {})
export class PokemonDexNumberUpdateWithWhereUniqueWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonDexNumberWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonDexNumberWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonDexNumberUpdateWithoutSpeciesInput, {
    nullable: false
  })
  data!: PokemonDexNumberUpdateWithoutSpeciesInput;
}
