import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateNestedOneWithoutTypesInput } from "../inputs/PokemonCreateNestedOneWithoutTypesInput";
import { TypeCreateNestedOneWithoutPokemonTypesInput } from "../inputs/TypeCreateNestedOneWithoutPokemonTypesInput";

@TypeGraphQL.InputType("PokemonTypeCreateInput", {})
export class PokemonTypeCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  slot!: number;

  @TypeGraphQL.Field(_type => PokemonCreateNestedOneWithoutTypesInput, {
    nullable: false
  })
  pokemon!: PokemonCreateNestedOneWithoutTypesInput;

  @TypeGraphQL.Field(_type => TypeCreateNestedOneWithoutPokemonTypesInput, {
    nullable: false
  })
  type!: TypeCreateNestedOneWithoutPokemonTypesInput;
}
