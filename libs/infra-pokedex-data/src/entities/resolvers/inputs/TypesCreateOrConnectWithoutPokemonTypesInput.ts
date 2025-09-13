import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateWithoutPokemonTypesInput } from "../inputs/TypesCreateWithoutPokemonTypesInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesCreateOrConnectWithoutPokemonTypesInput", {})
export class TypesCreateOrConnectWithoutPokemonTypesInput {
  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: false
  })
  where!: TypesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypesCreateWithoutPokemonTypesInput, {
    nullable: false
  })
  create!: TypesCreateWithoutPokemonTypesInput;
}
