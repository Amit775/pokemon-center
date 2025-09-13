import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateWithoutTypesInput } from "../inputs/PokemonCreateWithoutTypesInput";
import { PokemonWhereUniqueInput } from "../inputs/PokemonWhereUniqueInput";

@TypeGraphQL.InputType("PokemonCreateOrConnectWithoutTypesInput", {})
export class PokemonCreateOrConnectWithoutTypesInput {
  @TypeGraphQL.Field(_type => PokemonWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonCreateWithoutTypesInput, {
    nullable: false
  })
  create!: PokemonCreateWithoutTypesInput;
}
