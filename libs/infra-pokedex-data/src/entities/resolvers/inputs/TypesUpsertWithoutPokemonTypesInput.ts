import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateWithoutPokemonTypesInput } from "../inputs/TypesCreateWithoutPokemonTypesInput";
import { TypesUpdateWithoutPokemonTypesInput } from "../inputs/TypesUpdateWithoutPokemonTypesInput";
import { TypesWhereInput } from "../inputs/TypesWhereInput";

@TypeGraphQL.InputType("TypesUpsertWithoutPokemonTypesInput", {})
export class TypesUpsertWithoutPokemonTypesInput {
  @TypeGraphQL.Field(_type => TypesUpdateWithoutPokemonTypesInput, {
    nullable: false
  })
  update!: TypesUpdateWithoutPokemonTypesInput;

  @TypeGraphQL.Field(_type => TypesCreateWithoutPokemonTypesInput, {
    nullable: false
  })
  create!: TypesCreateWithoutPokemonTypesInput;

  @TypeGraphQL.Field(_type => TypesWhereInput, {
    nullable: true
  })
  where?: TypesWhereInput | undefined;
}
