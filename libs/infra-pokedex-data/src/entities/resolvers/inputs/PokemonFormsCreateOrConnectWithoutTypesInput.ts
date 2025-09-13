import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormsCreateWithoutTypesInput } from "../inputs/PokemonFormsCreateWithoutTypesInput";
import { PokemonFormsWhereUniqueInput } from "../inputs/PokemonFormsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormsCreateOrConnectWithoutTypesInput", {})
export class PokemonFormsCreateOrConnectWithoutTypesInput {
  @TypeGraphQL.Field(_type => PokemonFormsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormsCreateWithoutTypesInput, {
    nullable: false
  })
  create!: PokemonFormsCreateWithoutTypesInput;
}
