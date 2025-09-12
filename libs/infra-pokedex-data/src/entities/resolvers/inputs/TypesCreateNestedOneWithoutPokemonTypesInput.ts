import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateOrConnectWithoutPokemonTypesInput } from "../inputs/TypesCreateOrConnectWithoutPokemonTypesInput";
import { TypesCreateWithoutPokemonTypesInput } from "../inputs/TypesCreateWithoutPokemonTypesInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesCreateNestedOneWithoutPokemonTypesInput", {})
export class TypesCreateNestedOneWithoutPokemonTypesInput {
  @TypeGraphQL.Field(_type => TypesCreateWithoutPokemonTypesInput, {
    nullable: true
  })
  create?: TypesCreateWithoutPokemonTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypesCreateOrConnectWithoutPokemonTypesInput, {
    nullable: true
  })
  connectOrCreate?: TypesCreateOrConnectWithoutPokemonTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: true
  })
  connect?: TypesWhereUniqueInput | undefined;
}
