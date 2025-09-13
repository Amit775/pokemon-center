import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionScalarWhereInput } from "../inputs/PokemonEvolutionScalarWhereInput";
import { PokemonEvolutionUpdateManyMutationInput } from "../inputs/PokemonEvolutionUpdateManyMutationInput";

@TypeGraphQL.InputType("PokemonEvolutionUpdateManyWithWhereWithoutTriggerItemInput", {})
export class PokemonEvolutionUpdateManyWithWhereWithoutTriggerItemInput {
  @TypeGraphQL.Field(_type => PokemonEvolutionScalarWhereInput, {
    nullable: false
  })
  where!: PokemonEvolutionScalarWhereInput;

  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonEvolutionUpdateManyMutationInput;
}
