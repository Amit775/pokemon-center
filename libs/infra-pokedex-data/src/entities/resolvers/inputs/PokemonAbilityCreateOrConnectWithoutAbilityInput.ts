import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAbilityCreateWithoutAbilityInput } from "../inputs/PokemonAbilityCreateWithoutAbilityInput";
import { PokemonAbilityWhereUniqueInput } from "../inputs/PokemonAbilityWhereUniqueInput";

@TypeGraphQL.InputType("PokemonAbilityCreateOrConnectWithoutAbilityInput", {})
export class PokemonAbilityCreateOrConnectWithoutAbilityInput {
  @TypeGraphQL.Field(_type => PokemonAbilityWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonAbilityWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonAbilityCreateWithoutAbilityInput, {
    nullable: false
  })
  create!: PokemonAbilityCreateWithoutAbilityInput;
}
