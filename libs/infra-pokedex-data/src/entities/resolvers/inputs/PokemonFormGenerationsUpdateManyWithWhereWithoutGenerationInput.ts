import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormGenerationsScalarWhereInput } from "../inputs/PokemonFormGenerationsScalarWhereInput";
import { PokemonFormGenerationsUpdateManyMutationInput } from "../inputs/PokemonFormGenerationsUpdateManyMutationInput";

@TypeGraphQL.InputType("PokemonFormGenerationsUpdateManyWithWhereWithoutGenerationInput", {})
export class PokemonFormGenerationsUpdateManyWithWhereWithoutGenerationInput {
  @TypeGraphQL.Field(_type => PokemonFormGenerationsScalarWhereInput, {
    nullable: false
  })
  where!: PokemonFormGenerationsScalarWhereInput;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonFormGenerationsUpdateManyMutationInput;
}
