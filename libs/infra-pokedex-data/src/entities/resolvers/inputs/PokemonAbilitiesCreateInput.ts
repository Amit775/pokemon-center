import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilitiesCreateNestedOneWithoutPokemonAbilitiesInput } from "../inputs/AbilitiesCreateNestedOneWithoutPokemonAbilitiesInput";
import { PokemonCreateNestedOneWithoutAbilitiesInput } from "../inputs/PokemonCreateNestedOneWithoutAbilitiesInput";

@TypeGraphQL.InputType("PokemonAbilitiesCreateInput", {})
export class PokemonAbilitiesCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  is_hidden!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  slot!: number;

  @TypeGraphQL.Field(_type => PokemonCreateNestedOneWithoutAbilitiesInput, {
    nullable: false
  })
  pokemon!: PokemonCreateNestedOneWithoutAbilitiesInput;

  @TypeGraphQL.Field(_type => AbilitiesCreateNestedOneWithoutPokemonAbilitiesInput, {
    nullable: false
  })
  ability!: AbilitiesCreateNestedOneWithoutPokemonAbilitiesInput;
}
