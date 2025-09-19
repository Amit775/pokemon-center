import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEggGroupScalarWhereInput } from "../inputs/PokemonEggGroupScalarWhereInput";
import { PokemonEggGroupUpdateManyMutationInput } from "../inputs/PokemonEggGroupUpdateManyMutationInput";

@TypeGraphQL.InputType("PokemonEggGroupUpdateManyWithWhereWithoutEggGroupInput", {})
export class PokemonEggGroupUpdateManyWithWhereWithoutEggGroupInput {
  @TypeGraphQL.Field(_type => PokemonEggGroupScalarWhereInput, {
    nullable: false
  })
  where!: PokemonEggGroupScalarWhereInput;

  @TypeGraphQL.Field(_type => PokemonEggGroupUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonEggGroupUpdateManyMutationInput;
}
