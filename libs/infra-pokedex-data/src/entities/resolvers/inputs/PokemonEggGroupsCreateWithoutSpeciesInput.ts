import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EggGroupsCreateNestedOneWithoutSpeciesInput } from "../inputs/EggGroupsCreateNestedOneWithoutSpeciesInput";

@TypeGraphQL.InputType("PokemonEggGroupsCreateWithoutSpeciesInput", {})
export class PokemonEggGroupsCreateWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => EggGroupsCreateNestedOneWithoutSpeciesInput, {
    nullable: false
  })
  eggGroup!: EggGroupsCreateNestedOneWithoutSpeciesInput;
}
