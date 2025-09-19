import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormCreateNestedOneWithoutTypesInput } from "../inputs/PokemonFormCreateNestedOneWithoutTypesInput";
import { TypeCreateNestedOneWithoutFormTypesInput } from "../inputs/TypeCreateNestedOneWithoutFormTypesInput";

@TypeGraphQL.InputType("PokemonFormTypeCreateInput", {})
export class PokemonFormTypeCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  slot!: number;

  @TypeGraphQL.Field(_type => PokemonFormCreateNestedOneWithoutTypesInput, {
    nullable: false
  })
  pokemonForm!: PokemonFormCreateNestedOneWithoutTypesInput;

  @TypeGraphQL.Field(_type => TypeCreateNestedOneWithoutFormTypesInput, {
    nullable: false
  })
  type!: TypeCreateNestedOneWithoutFormTypesInput;
}
