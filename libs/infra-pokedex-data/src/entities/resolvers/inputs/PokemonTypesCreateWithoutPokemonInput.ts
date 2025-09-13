import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateNestedOneWithoutPokemonTypesInput } from "../inputs/TypesCreateNestedOneWithoutPokemonTypesInput";

@TypeGraphQL.InputType("PokemonTypesCreateWithoutPokemonInput", {})
export class PokemonTypesCreateWithoutPokemonInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  slot!: number;

  @TypeGraphQL.Field(_type => TypesCreateNestedOneWithoutPokemonTypesInput, {
    nullable: false
  })
  type!: TypesCreateNestedOneWithoutPokemonTypesInput;
}
