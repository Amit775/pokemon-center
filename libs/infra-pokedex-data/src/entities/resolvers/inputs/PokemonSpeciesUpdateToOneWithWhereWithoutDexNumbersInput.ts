import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesUpdateWithoutDexNumbersInput } from "../inputs/PokemonSpeciesUpdateWithoutDexNumbersInput";
import { PokemonSpeciesWhereInput } from "../inputs/PokemonSpeciesWhereInput";

@TypeGraphQL.InputType("PokemonSpeciesUpdateToOneWithWhereWithoutDexNumbersInput", {})
export class PokemonSpeciesUpdateToOneWithWhereWithoutDexNumbersInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesWhereInput, {
    nullable: true
  })
  where?: PokemonSpeciesWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateWithoutDexNumbersInput, {
    nullable: false
  })
  data!: PokemonSpeciesUpdateWithoutDexNumbersInput;
}
