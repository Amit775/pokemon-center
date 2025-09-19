import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilityUpdateOneRequiredWithoutPokemonAbilitiesNestedInput } from "../inputs/AbilityUpdateOneRequiredWithoutPokemonAbilitiesNestedInput";

@TypeGraphQL.InputType("PokemonAbilityUpdateWithoutPokemonInput", {})
export class PokemonAbilityUpdateWithoutPokemonInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  is_hidden?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  slot?: number | undefined;

  @TypeGraphQL.Field(_type => AbilityUpdateOneRequiredWithoutPokemonAbilitiesNestedInput, {
    nullable: true
  })
  ability?: AbilityUpdateOneRequiredWithoutPokemonAbilitiesNestedInput | undefined;
}
