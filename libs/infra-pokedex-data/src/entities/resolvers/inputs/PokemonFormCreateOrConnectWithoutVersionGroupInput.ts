import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormCreateWithoutVersionGroupInput } from "../inputs/PokemonFormCreateWithoutVersionGroupInput";
import { PokemonFormWhereUniqueInput } from "../inputs/PokemonFormWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormCreateOrConnectWithoutVersionGroupInput", {})
export class PokemonFormCreateOrConnectWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => PokemonFormWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormCreateWithoutVersionGroupInput, {
    nullable: false
  })
  create!: PokemonFormCreateWithoutVersionGroupInput;
}
