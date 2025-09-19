import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAbilityCreateNestedManyWithoutAbilityInput } from "../inputs/PokemonAbilityCreateNestedManyWithoutAbilityInput";

@TypeGraphQL.InputType("AbilityCreateWithoutGenerationInput", {})
export class AbilityCreateWithoutGenerationInput {
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

  @TypeGraphQL.Field(_type => PokemonAbilityCreateNestedManyWithoutAbilityInput, {
    nullable: true
  })
  pokemonAbilities?: PokemonAbilityCreateNestedManyWithoutAbilityInput | undefined;
}
