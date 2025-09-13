import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAbilitiesCreateNestedManyWithoutAbilityInput } from "../inputs/PokemonAbilitiesCreateNestedManyWithoutAbilityInput";

@TypeGraphQL.InputType("AbilitiesCreateWithoutGenerationInput", {})
export class AbilitiesCreateWithoutGenerationInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  is_main_series!: number;

  @TypeGraphQL.Field(_type => PokemonAbilitiesCreateNestedManyWithoutAbilityInput, {
    nullable: true
  })
  pokemonAbilities?: PokemonAbilitiesCreateNestedManyWithoutAbilityInput | undefined;
}
