import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEggGroupCreateWithoutEggGroupInput } from "../inputs/PokemonEggGroupCreateWithoutEggGroupInput";
import { PokemonEggGroupWhereUniqueInput } from "../inputs/PokemonEggGroupWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEggGroupCreateOrConnectWithoutEggGroupInput", {})
export class PokemonEggGroupCreateOrConnectWithoutEggGroupInput {
  @TypeGraphQL.Field(_type => PokemonEggGroupWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEggGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonEggGroupCreateWithoutEggGroupInput, {
    nullable: false
  })
  create!: PokemonEggGroupCreateWithoutEggGroupInput;
}
