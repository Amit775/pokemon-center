import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateWithoutPokemonTypesInput } from "../inputs/TypeCreateWithoutPokemonTypesInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeCreateOrConnectWithoutPokemonTypesInput", {})
export class TypeCreateOrConnectWithoutPokemonTypesInput {
  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: false
  })
  where!: TypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypeCreateWithoutPokemonTypesInput, {
    nullable: false
  })
  create!: TypeCreateWithoutPokemonTypesInput;
}
