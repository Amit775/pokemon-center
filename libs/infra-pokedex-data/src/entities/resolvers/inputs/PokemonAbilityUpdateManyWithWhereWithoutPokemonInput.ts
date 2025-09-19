import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAbilityScalarWhereInput } from "../inputs/PokemonAbilityScalarWhereInput";
import { PokemonAbilityUpdateManyMutationInput } from "../inputs/PokemonAbilityUpdateManyMutationInput";

@TypeGraphQL.InputType("PokemonAbilityUpdateManyWithWhereWithoutPokemonInput", {})
export class PokemonAbilityUpdateManyWithWhereWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonAbilityScalarWhereInput, {
    nullable: false
  })
  where!: PokemonAbilityScalarWhereInput;

  @TypeGraphQL.Field(_type => PokemonAbilityUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonAbilityUpdateManyMutationInput;
}
