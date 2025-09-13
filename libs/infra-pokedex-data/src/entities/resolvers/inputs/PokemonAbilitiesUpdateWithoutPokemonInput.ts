import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilitiesUpdateOneRequiredWithoutPokemonAbilitiesNestedInput } from "../inputs/AbilitiesUpdateOneRequiredWithoutPokemonAbilitiesNestedInput";

@TypeGraphQL.InputType("PokemonAbilitiesUpdateWithoutPokemonInput", {})
export class PokemonAbilitiesUpdateWithoutPokemonInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  is_hidden?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  slot?: number | undefined;

  @TypeGraphQL.Field(_type => AbilitiesUpdateOneRequiredWithoutPokemonAbilitiesNestedInput, {
    nullable: true
  })
  ability?: AbilitiesUpdateOneRequiredWithoutPokemonAbilitiesNestedInput | undefined;
}
