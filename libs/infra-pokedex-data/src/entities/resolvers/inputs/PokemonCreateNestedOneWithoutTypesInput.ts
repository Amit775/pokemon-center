import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateOrConnectWithoutTypesInput } from "../inputs/PokemonCreateOrConnectWithoutTypesInput";
import { PokemonCreateWithoutTypesInput } from "../inputs/PokemonCreateWithoutTypesInput";
import { PokemonWhereUniqueInput } from "../inputs/PokemonWhereUniqueInput";

@TypeGraphQL.InputType("PokemonCreateNestedOneWithoutTypesInput", {})
export class PokemonCreateNestedOneWithoutTypesInput {
  @TypeGraphQL.Field(_type => PokemonCreateWithoutTypesInput, {
    nullable: true
  })
  create?: PokemonCreateWithoutTypesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonCreateOrConnectWithoutTypesInput, {
    nullable: true
  })
  connectOrCreate?: PokemonCreateOrConnectWithoutTypesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonWhereUniqueInput | undefined;
}
