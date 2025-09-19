import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormCreateNestedOneWithoutTypesInput } from "../inputs/PokemonFormCreateNestedOneWithoutTypesInput";

@TypeGraphQL.InputType("PokemonFormTypeCreateWithoutTypeInput", {})
export class PokemonFormTypeCreateWithoutTypeInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  slot!: number;

  @TypeGraphQL.Field(_type => PokemonFormCreateNestedOneWithoutTypesInput, {
    nullable: false
  })
  pokemonForm!: PokemonFormCreateNestedOneWithoutTypesInput;
}
