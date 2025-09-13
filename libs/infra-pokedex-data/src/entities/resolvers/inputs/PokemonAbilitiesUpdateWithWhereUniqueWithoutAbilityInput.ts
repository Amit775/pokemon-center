import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAbilitiesUpdateWithoutAbilityInput } from "../inputs/PokemonAbilitiesUpdateWithoutAbilityInput";
import { PokemonAbilitiesWhereUniqueInput } from "../inputs/PokemonAbilitiesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonAbilitiesUpdateWithWhereUniqueWithoutAbilityInput", {})
export class PokemonAbilitiesUpdateWithWhereUniqueWithoutAbilityInput {
  @TypeGraphQL.Field(_type => PokemonAbilitiesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonAbilitiesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonAbilitiesUpdateWithoutAbilityInput, {
    nullable: false
  })
  data!: PokemonAbilitiesUpdateWithoutAbilityInput;
}
