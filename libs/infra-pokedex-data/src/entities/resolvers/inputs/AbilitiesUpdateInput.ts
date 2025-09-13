import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsUpdateOneRequiredWithoutAbilitiesNestedInput } from "../inputs/GenerationsUpdateOneRequiredWithoutAbilitiesNestedInput";
import { PokemonAbilitiesUpdateManyWithoutAbilityNestedInput } from "../inputs/PokemonAbilitiesUpdateManyWithoutAbilityNestedInput";

@TypeGraphQL.InputType("AbilitiesUpdateInput", {})
export class AbilitiesUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  is_main_series?: number | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpdateOneRequiredWithoutAbilitiesNestedInput, {
    nullable: true
  })
  generation?: GenerationsUpdateOneRequiredWithoutAbilitiesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilitiesUpdateManyWithoutAbilityNestedInput, {
    nullable: true
  })
  pokemonAbilities?: PokemonAbilitiesUpdateManyWithoutAbilityNestedInput | undefined;
}
