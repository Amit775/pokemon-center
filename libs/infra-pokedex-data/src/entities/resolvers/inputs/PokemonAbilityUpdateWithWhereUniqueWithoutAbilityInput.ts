import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAbilityUpdateWithoutAbilityInput } from "../inputs/PokemonAbilityUpdateWithoutAbilityInput";
import { PokemonAbilityWhereUniqueInput } from "../inputs/PokemonAbilityWhereUniqueInput";

@TypeGraphQL.InputType("PokemonAbilityUpdateWithWhereUniqueWithoutAbilityInput", {})
export class PokemonAbilityUpdateWithWhereUniqueWithoutAbilityInput {
  @TypeGraphQL.Field(_type => PokemonAbilityWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonAbilityWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonAbilityUpdateWithoutAbilityInput, {
    nullable: false
  })
  data!: PokemonAbilityUpdateWithoutAbilityInput;
}
