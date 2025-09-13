import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormsCreateOrConnectWithoutTypesInput } from "../inputs/PokemonFormsCreateOrConnectWithoutTypesInput";
import { PokemonFormsCreateWithoutTypesInput } from "../inputs/PokemonFormsCreateWithoutTypesInput";
import { PokemonFormsWhereUniqueInput } from "../inputs/PokemonFormsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormsCreateNestedOneWithoutTypesInput", {})
export class PokemonFormsCreateNestedOneWithoutTypesInput {
  @TypeGraphQL.Field(_type => PokemonFormsCreateWithoutTypesInput, {
    nullable: true
  })
  create?: PokemonFormsCreateWithoutTypesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormsCreateOrConnectWithoutTypesInput, {
    nullable: true
  })
  connectOrCreate?: PokemonFormsCreateOrConnectWithoutTypesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormsWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonFormsWhereUniqueInput | undefined;
}
