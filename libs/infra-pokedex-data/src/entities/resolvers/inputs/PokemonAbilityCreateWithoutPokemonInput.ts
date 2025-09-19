import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilityCreateNestedOneWithoutPokemonAbilitiesInput } from "../inputs/AbilityCreateNestedOneWithoutPokemonAbilitiesInput";

@TypeGraphQL.InputType("PokemonAbilityCreateWithoutPokemonInput", {})
export class PokemonAbilityCreateWithoutPokemonInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  is_hidden!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  slot!: number;

  @TypeGraphQL.Field(_type => AbilityCreateNestedOneWithoutPokemonAbilitiesInput, {
    nullable: false
  })
  ability!: AbilityCreateNestedOneWithoutPokemonAbilitiesInput;
}
