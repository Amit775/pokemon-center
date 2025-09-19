import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAbilityCreateWithoutAbilityInput } from "../inputs/PokemonAbilityCreateWithoutAbilityInput";
import { PokemonAbilityUpdateWithoutAbilityInput } from "../inputs/PokemonAbilityUpdateWithoutAbilityInput";
import { PokemonAbilityWhereUniqueInput } from "../inputs/PokemonAbilityWhereUniqueInput";

@TypeGraphQL.InputType("PokemonAbilityUpsertWithWhereUniqueWithoutAbilityInput", {})
export class PokemonAbilityUpsertWithWhereUniqueWithoutAbilityInput {
  @TypeGraphQL.Field(_type => PokemonAbilityWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonAbilityWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonAbilityUpdateWithoutAbilityInput, {
    nullable: false
  })
  update!: PokemonAbilityUpdateWithoutAbilityInput;

  @TypeGraphQL.Field(_type => PokemonAbilityCreateWithoutAbilityInput, {
    nullable: false
  })
  create!: PokemonAbilityCreateWithoutAbilityInput;
}
