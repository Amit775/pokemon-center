import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateNestedOneWithoutTypesInput } from "../inputs/PokemonCreateNestedOneWithoutTypesInput";

@TypeGraphQL.InputType("PokemonTypesCreateWithoutTypeInput", {})
export class PokemonTypesCreateWithoutTypeInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  slot!: number;

  @TypeGraphQL.Field(_type => PokemonCreateNestedOneWithoutTypesInput, {
    nullable: false
  })
  pokemon!: PokemonCreateNestedOneWithoutTypesInput;
}
