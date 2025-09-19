import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilityCreateNestedOneWithoutPokemonAbilitiesInput } from "../inputs/AbilityCreateNestedOneWithoutPokemonAbilitiesInput";
import { PokemonCreateNestedOneWithoutAbilitiesInput } from "../inputs/PokemonCreateNestedOneWithoutAbilitiesInput";

@TypeGraphQL.InputType("PokemonAbilityCreateInput", {})
export class PokemonAbilityCreateInput {
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

  @TypeGraphQL.Field(_type => AbilityCreateNestedOneWithoutPokemonAbilitiesInput, {
    nullable: false
  })
  ability!: AbilityCreateNestedOneWithoutPokemonAbilitiesInput;
}
