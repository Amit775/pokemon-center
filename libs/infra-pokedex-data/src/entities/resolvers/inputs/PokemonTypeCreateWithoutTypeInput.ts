import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateNestedOneWithoutTypesInput } from "../inputs/PokemonCreateNestedOneWithoutTypesInput";

@TypeGraphQL.InputType("PokemonTypeCreateWithoutTypeInput", {})
export class PokemonTypeCreateWithoutTypeInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  slot!: number;

  @TypeGraphQL.Field(_type => PokemonCreateNestedOneWithoutTypesInput, {
    nullable: false
  })
  pokemon!: PokemonCreateNestedOneWithoutTypesInput;
}
