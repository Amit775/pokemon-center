import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAbilitiesScalarWhereInput } from "../inputs/PokemonAbilitiesScalarWhereInput";
import { PokemonAbilitiesUpdateManyMutationInput } from "../inputs/PokemonAbilitiesUpdateManyMutationInput";

@TypeGraphQL.InputType("PokemonAbilitiesUpdateManyWithWhereWithoutAbilityInput", {})
export class PokemonAbilitiesUpdateManyWithWhereWithoutAbilityInput {
  @TypeGraphQL.Field(_type => PokemonAbilitiesScalarWhereInput, {
    nullable: false
  })
  where!: PokemonAbilitiesScalarWhereInput;

  @TypeGraphQL.Field(_type => PokemonAbilitiesUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonAbilitiesUpdateManyMutationInput;
}
