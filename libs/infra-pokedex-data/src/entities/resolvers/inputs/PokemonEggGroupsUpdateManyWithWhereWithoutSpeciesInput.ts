import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEggGroupsScalarWhereInput } from "../inputs/PokemonEggGroupsScalarWhereInput";
import { PokemonEggGroupsUpdateManyMutationInput } from "../inputs/PokemonEggGroupsUpdateManyMutationInput";

@TypeGraphQL.InputType("PokemonEggGroupsUpdateManyWithWhereWithoutSpeciesInput", {})
export class PokemonEggGroupsUpdateManyWithWhereWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonEggGroupsScalarWhereInput, {
    nullable: false
  })
  where!: PokemonEggGroupsScalarWhereInput;

  @TypeGraphQL.Field(_type => PokemonEggGroupsUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonEggGroupsUpdateManyMutationInput;
}
