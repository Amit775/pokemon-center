import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateNestedOneWithoutAbilitiesInput } from "../inputs/PokemonCreateNestedOneWithoutAbilitiesInput";

@TypeGraphQL.InputType("PokemonAbilitiesCreateWithoutAbilityInput", {})
export class PokemonAbilitiesCreateWithoutAbilityInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  is_hidden!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  slot!: number;

  @TypeGraphQL.Field(_type => PokemonCreateNestedOneWithoutAbilitiesInput, {
    nullable: false
  })
  pokemon!: PokemonCreateNestedOneWithoutAbilitiesInput;
}
