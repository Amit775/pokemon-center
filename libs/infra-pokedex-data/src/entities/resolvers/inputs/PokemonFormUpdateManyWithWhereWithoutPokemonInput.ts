import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormScalarWhereInput } from "../inputs/PokemonFormScalarWhereInput";
import { PokemonFormUpdateManyMutationInput } from "../inputs/PokemonFormUpdateManyMutationInput";

@TypeGraphQL.InputType("PokemonFormUpdateManyWithWhereWithoutPokemonInput", {})
export class PokemonFormUpdateManyWithWhereWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonFormScalarWhereInput, {
    nullable: false
  })
  where!: PokemonFormScalarWhereInput;

  @TypeGraphQL.Field(_type => PokemonFormUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonFormUpdateManyMutationInput;
}
