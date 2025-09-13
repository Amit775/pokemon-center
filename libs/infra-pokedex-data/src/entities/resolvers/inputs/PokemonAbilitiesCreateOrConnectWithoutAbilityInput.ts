import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAbilitiesCreateWithoutAbilityInput } from "../inputs/PokemonAbilitiesCreateWithoutAbilityInput";
import { PokemonAbilitiesWhereUniqueInput } from "../inputs/PokemonAbilitiesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonAbilitiesCreateOrConnectWithoutAbilityInput", {})
export class PokemonAbilitiesCreateOrConnectWithoutAbilityInput {
  @TypeGraphQL.Field(_type => PokemonAbilitiesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonAbilitiesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonAbilitiesCreateWithoutAbilityInput, {
    nullable: false
  })
  create!: PokemonAbilitiesCreateWithoutAbilityInput;
}
