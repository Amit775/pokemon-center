import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveMethodsCreateWithoutVersionGroupsInput } from "../inputs/PokemonMoveMethodsCreateWithoutVersionGroupsInput";
import { PokemonMoveMethodsWhereUniqueInput } from "../inputs/PokemonMoveMethodsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMoveMethodsCreateOrConnectWithoutVersionGroupsInput", {})
export class PokemonMoveMethodsCreateOrConnectWithoutVersionGroupsInput {
  @TypeGraphQL.Field(_type => PokemonMoveMethodsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMoveMethodsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsCreateWithoutVersionGroupsInput, {
    nullable: false
  })
  create!: PokemonMoveMethodsCreateWithoutVersionGroupsInput;
}
