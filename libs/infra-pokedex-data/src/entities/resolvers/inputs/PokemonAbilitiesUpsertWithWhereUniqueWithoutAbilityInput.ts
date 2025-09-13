import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAbilitiesCreateWithoutAbilityInput } from "../inputs/PokemonAbilitiesCreateWithoutAbilityInput";
import { PokemonAbilitiesUpdateWithoutAbilityInput } from "../inputs/PokemonAbilitiesUpdateWithoutAbilityInput";
import { PokemonAbilitiesWhereUniqueInput } from "../inputs/PokemonAbilitiesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonAbilitiesUpsertWithWhereUniqueWithoutAbilityInput", {})
export class PokemonAbilitiesUpsertWithWhereUniqueWithoutAbilityInput {
  @TypeGraphQL.Field(_type => PokemonAbilitiesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonAbilitiesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonAbilitiesUpdateWithoutAbilityInput, {
    nullable: false
  })
  update!: PokemonAbilitiesUpdateWithoutAbilityInput;

  @TypeGraphQL.Field(_type => PokemonAbilitiesCreateWithoutAbilityInput, {
    nullable: false
  })
  create!: PokemonAbilitiesCreateWithoutAbilityInput;
}
