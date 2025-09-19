import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormCreateOrConnectWithoutTypesInput } from "../inputs/PokemonFormCreateOrConnectWithoutTypesInput";
import { PokemonFormCreateWithoutTypesInput } from "../inputs/PokemonFormCreateWithoutTypesInput";
import { PokemonFormWhereUniqueInput } from "../inputs/PokemonFormWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormCreateNestedOneWithoutTypesInput", {})
export class PokemonFormCreateNestedOneWithoutTypesInput {
  @TypeGraphQL.Field(_type => PokemonFormCreateWithoutTypesInput, {
    nullable: true
  })
  create?: PokemonFormCreateWithoutTypesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormCreateOrConnectWithoutTypesInput, {
    nullable: true
  })
  connectOrCreate?: PokemonFormCreateOrConnectWithoutTypesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonFormWhereUniqueInput | undefined;
}
