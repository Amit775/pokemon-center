import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonStatScalarWhereInput } from "../inputs/PokemonStatScalarWhereInput";
import { PokemonStatUpdateManyMutationInput } from "../inputs/PokemonStatUpdateManyMutationInput";

@TypeGraphQL.InputType("PokemonStatUpdateManyWithWhereWithoutPokemonInput", {})
export class PokemonStatUpdateManyWithWhereWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonStatScalarWhereInput, {
    nullable: false
  })
  where!: PokemonStatScalarWhereInput;

  @TypeGraphQL.Field(_type => PokemonStatUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonStatUpdateManyMutationInput;
}
