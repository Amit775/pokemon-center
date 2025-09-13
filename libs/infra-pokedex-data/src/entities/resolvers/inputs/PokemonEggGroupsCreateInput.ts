import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EggGroupsCreateNestedOneWithoutSpeciesInput } from "../inputs/EggGroupsCreateNestedOneWithoutSpeciesInput";
import { PokemonSpeciesCreateNestedOneWithoutEggGroupsInput } from "../inputs/PokemonSpeciesCreateNestedOneWithoutEggGroupsInput";

@TypeGraphQL.InputType("PokemonEggGroupsCreateInput", {})
export class PokemonEggGroupsCreateInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesCreateNestedOneWithoutEggGroupsInput, {
    nullable: false
  })
  species!: PokemonSpeciesCreateNestedOneWithoutEggGroupsInput;

  @TypeGraphQL.Field(_type => EggGroupsCreateNestedOneWithoutSpeciesInput, {
    nullable: false
  })
  eggGroup!: EggGroupsCreateNestedOneWithoutSpeciesInput;
}
