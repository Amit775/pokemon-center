import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemScalarWhereInput } from "../inputs/PokemonItemScalarWhereInput";
import { PokemonItemUpdateManyMutationInput } from "../inputs/PokemonItemUpdateManyMutationInput";

@TypeGraphQL.InputType("PokemonItemUpdateManyWithWhereWithoutPokemonInput", {})
export class PokemonItemUpdateManyWithWhereWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonItemScalarWhereInput, {
    nullable: false
  })
  where!: PokemonItemScalarWhereInput;

  @TypeGraphQL.Field(_type => PokemonItemUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonItemUpdateManyMutationInput;
}
