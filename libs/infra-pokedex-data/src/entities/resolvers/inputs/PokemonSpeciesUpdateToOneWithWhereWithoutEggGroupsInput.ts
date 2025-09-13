import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesUpdateWithoutEggGroupsInput } from "../inputs/PokemonSpeciesUpdateWithoutEggGroupsInput";
import { PokemonSpeciesWhereInput } from "../inputs/PokemonSpeciesWhereInput";

@TypeGraphQL.InputType("PokemonSpeciesUpdateToOneWithWhereWithoutEggGroupsInput", {})
export class PokemonSpeciesUpdateToOneWithWhereWithoutEggGroupsInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesWhereInput, {
    nullable: true
  })
  where?: PokemonSpeciesWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateWithoutEggGroupsInput, {
    nullable: false
  })
  data!: PokemonSpeciesUpdateWithoutEggGroupsInput;
}
