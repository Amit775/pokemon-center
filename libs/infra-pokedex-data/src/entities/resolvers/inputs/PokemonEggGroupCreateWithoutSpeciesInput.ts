import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EggGroupCreateNestedOneWithoutSpeciesInput } from "../inputs/EggGroupCreateNestedOneWithoutSpeciesInput";

@TypeGraphQL.InputType("PokemonEggGroupCreateWithoutSpeciesInput", {})
export class PokemonEggGroupCreateWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => EggGroupCreateNestedOneWithoutSpeciesInput, {
    nullable: false
  })
  eggGroup!: EggGroupCreateNestedOneWithoutSpeciesInput;
}
