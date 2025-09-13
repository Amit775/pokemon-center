import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilitiesCreateNestedOneWithoutPokemonAbilitiesInput } from "../inputs/AbilitiesCreateNestedOneWithoutPokemonAbilitiesInput";

@TypeGraphQL.InputType("PokemonAbilitiesCreateWithoutPokemonInput", {})
export class PokemonAbilitiesCreateWithoutPokemonInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  is_hidden!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  slot!: number;

  @TypeGraphQL.Field(_type => AbilitiesCreateNestedOneWithoutPokemonAbilitiesInput, {
    nullable: false
  })
  ability!: AbilitiesCreateNestedOneWithoutPokemonAbilitiesInput;
}
