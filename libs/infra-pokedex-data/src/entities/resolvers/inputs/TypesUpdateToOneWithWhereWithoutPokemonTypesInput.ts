import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesUpdateWithoutPokemonTypesInput } from "../inputs/TypesUpdateWithoutPokemonTypesInput";
import { TypesWhereInput } from "../inputs/TypesWhereInput";

@TypeGraphQL.InputType("TypesUpdateToOneWithWhereWithoutPokemonTypesInput", {})
export class TypesUpdateToOneWithWhereWithoutPokemonTypesInput {
  @TypeGraphQL.Field(_type => TypesWhereInput, {
    nullable: true
  })
  where?: TypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateWithoutPokemonTypesInput, {
    nullable: false
  })
  data!: TypesUpdateWithoutPokemonTypesInput;
}
