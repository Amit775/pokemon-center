import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEggGroupsCreateWithoutEggGroupInput } from "../inputs/PokemonEggGroupsCreateWithoutEggGroupInput";
import { PokemonEggGroupsWhereUniqueInput } from "../inputs/PokemonEggGroupsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEggGroupsCreateOrConnectWithoutEggGroupInput", {})
export class PokemonEggGroupsCreateOrConnectWithoutEggGroupInput {
  @TypeGraphQL.Field(_type => PokemonEggGroupsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEggGroupsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonEggGroupsCreateWithoutEggGroupInput, {
    nullable: false
  })
  create!: PokemonEggGroupsCreateWithoutEggGroupInput;
}
