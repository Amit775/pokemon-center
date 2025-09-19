import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateNestedOneWithoutPokemonTypesInput } from "../inputs/TypeCreateNestedOneWithoutPokemonTypesInput";

@TypeGraphQL.InputType("PokemonTypeCreateWithoutPokemonInput", {})
export class PokemonTypeCreateWithoutPokemonInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  slot!: number;

  @TypeGraphQL.Field(_type => TypeCreateNestedOneWithoutPokemonTypesInput, {
    nullable: false
  })
  type!: TypeCreateNestedOneWithoutPokemonTypesInput;
}
