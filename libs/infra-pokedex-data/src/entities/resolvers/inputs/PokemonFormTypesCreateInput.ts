import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormsCreateNestedOneWithoutTypesInput } from "../inputs/PokemonFormsCreateNestedOneWithoutTypesInput";
import { TypesCreateNestedOneWithoutFormTypesInput } from "../inputs/TypesCreateNestedOneWithoutFormTypesInput";

@TypeGraphQL.InputType("PokemonFormTypesCreateInput", {})
export class PokemonFormTypesCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  slot!: number;

  @TypeGraphQL.Field(_type => PokemonFormsCreateNestedOneWithoutTypesInput, {
    nullable: false
  })
  pokemonForm!: PokemonFormsCreateNestedOneWithoutTypesInput;

  @TypeGraphQL.Field(_type => TypesCreateNestedOneWithoutFormTypesInput, {
    nullable: false
  })
  type!: TypesCreateNestedOneWithoutFormTypesInput;
}
