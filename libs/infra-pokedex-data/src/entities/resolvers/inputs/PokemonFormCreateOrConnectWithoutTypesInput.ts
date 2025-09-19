import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormCreateWithoutTypesInput } from "../inputs/PokemonFormCreateWithoutTypesInput";
import { PokemonFormWhereUniqueInput } from "../inputs/PokemonFormWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormCreateOrConnectWithoutTypesInput", {})
export class PokemonFormCreateOrConnectWithoutTypesInput {
  @TypeGraphQL.Field(_type => PokemonFormWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormCreateWithoutTypesInput, {
    nullable: false
  })
  create!: PokemonFormCreateWithoutTypesInput;
}
