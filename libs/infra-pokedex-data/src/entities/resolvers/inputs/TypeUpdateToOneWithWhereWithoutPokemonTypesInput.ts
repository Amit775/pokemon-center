import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeUpdateWithoutPokemonTypesInput } from "../inputs/TypeUpdateWithoutPokemonTypesInput";
import { TypeWhereInput } from "../inputs/TypeWhereInput";

@TypeGraphQL.InputType("TypeUpdateToOneWithWhereWithoutPokemonTypesInput", {})
export class TypeUpdateToOneWithWhereWithoutPokemonTypesInput {
  @TypeGraphQL.Field(_type => TypeWhereInput, {
    nullable: true
  })
  where?: TypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateWithoutPokemonTypesInput, {
    nullable: false
  })
  data!: TypeUpdateWithoutPokemonTypesInput;
}
