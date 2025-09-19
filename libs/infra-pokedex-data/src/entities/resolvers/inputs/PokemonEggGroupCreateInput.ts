import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EggGroupCreateNestedOneWithoutSpeciesInput } from "../inputs/EggGroupCreateNestedOneWithoutSpeciesInput";
import { PokemonSpeciesCreateNestedOneWithoutEggGroupsInput } from "../inputs/PokemonSpeciesCreateNestedOneWithoutEggGroupsInput";

@TypeGraphQL.InputType("PokemonEggGroupCreateInput", {})
export class PokemonEggGroupCreateInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesCreateNestedOneWithoutEggGroupsInput, {
    nullable: false
  })
  species!: PokemonSpeciesCreateNestedOneWithoutEggGroupsInput;

  @TypeGraphQL.Field(_type => EggGroupCreateNestedOneWithoutSpeciesInput, {
    nullable: false
  })
  eggGroup!: EggGroupCreateNestedOneWithoutSpeciesInput;
}
