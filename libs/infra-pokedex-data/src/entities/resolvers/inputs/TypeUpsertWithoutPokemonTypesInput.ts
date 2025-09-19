import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateWithoutPokemonTypesInput } from "../inputs/TypeCreateWithoutPokemonTypesInput";
import { TypeUpdateWithoutPokemonTypesInput } from "../inputs/TypeUpdateWithoutPokemonTypesInput";
import { TypeWhereInput } from "../inputs/TypeWhereInput";

@TypeGraphQL.InputType("TypeUpsertWithoutPokemonTypesInput", {})
export class TypeUpsertWithoutPokemonTypesInput {
  @TypeGraphQL.Field(_type => TypeUpdateWithoutPokemonTypesInput, {
    nullable: false
  })
  update!: TypeUpdateWithoutPokemonTypesInput;

  @TypeGraphQL.Field(_type => TypeCreateWithoutPokemonTypesInput, {
    nullable: false
  })
  create!: TypeCreateWithoutPokemonTypesInput;

  @TypeGraphQL.Field(_type => TypeWhereInput, {
    nullable: true
  })
  where?: TypeWhereInput | undefined;
}
