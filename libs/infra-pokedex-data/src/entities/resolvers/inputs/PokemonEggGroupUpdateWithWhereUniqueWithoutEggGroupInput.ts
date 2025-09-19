import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEggGroupUpdateWithoutEggGroupInput } from "../inputs/PokemonEggGroupUpdateWithoutEggGroupInput";
import { PokemonEggGroupWhereUniqueInput } from "../inputs/PokemonEggGroupWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEggGroupUpdateWithWhereUniqueWithoutEggGroupInput", {})
export class PokemonEggGroupUpdateWithWhereUniqueWithoutEggGroupInput {
  @TypeGraphQL.Field(_type => PokemonEggGroupWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEggGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonEggGroupUpdateWithoutEggGroupInput, {
    nullable: false
  })
  data!: PokemonEggGroupUpdateWithoutEggGroupInput;
}
