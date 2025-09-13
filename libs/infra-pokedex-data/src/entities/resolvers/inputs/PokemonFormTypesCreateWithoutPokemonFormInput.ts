import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateNestedOneWithoutFormTypesInput } from "../inputs/TypesCreateNestedOneWithoutFormTypesInput";

@TypeGraphQL.InputType("PokemonFormTypesCreateWithoutPokemonFormInput", {})
export class PokemonFormTypesCreateWithoutPokemonFormInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  slot!: number;

  @TypeGraphQL.Field(_type => TypesCreateNestedOneWithoutFormTypesInput, {
    nullable: false
  })
  type!: TypesCreateNestedOneWithoutFormTypesInput;
}
