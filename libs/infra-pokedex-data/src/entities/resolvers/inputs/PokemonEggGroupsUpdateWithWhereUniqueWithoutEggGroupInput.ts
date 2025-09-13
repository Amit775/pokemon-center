import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEggGroupsUpdateWithoutEggGroupInput } from "../inputs/PokemonEggGroupsUpdateWithoutEggGroupInput";
import { PokemonEggGroupsWhereUniqueInput } from "../inputs/PokemonEggGroupsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEggGroupsUpdateWithWhereUniqueWithoutEggGroupInput", {})
export class PokemonEggGroupsUpdateWithWhereUniqueWithoutEggGroupInput {
  @TypeGraphQL.Field(_type => PokemonEggGroupsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEggGroupsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonEggGroupsUpdateWithoutEggGroupInput, {
    nullable: false
  })
  data!: PokemonEggGroupsUpdateWithoutEggGroupInput;
}
