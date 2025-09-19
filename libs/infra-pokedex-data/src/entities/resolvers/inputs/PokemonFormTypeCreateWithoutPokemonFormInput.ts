import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateNestedOneWithoutFormTypesInput } from "../inputs/TypeCreateNestedOneWithoutFormTypesInput";

@TypeGraphQL.InputType("PokemonFormTypeCreateWithoutPokemonFormInput", {})
export class PokemonFormTypeCreateWithoutPokemonFormInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  slot!: number;

  @TypeGraphQL.Field(_type => TypeCreateNestedOneWithoutFormTypesInput, {
    nullable: false
  })
  type!: TypeCreateNestedOneWithoutFormTypesInput;
}
