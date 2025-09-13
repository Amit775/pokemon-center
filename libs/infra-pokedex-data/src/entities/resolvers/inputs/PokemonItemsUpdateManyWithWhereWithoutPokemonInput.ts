import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemsScalarWhereInput } from "../inputs/PokemonItemsScalarWhereInput";
import { PokemonItemsUpdateManyMutationInput } from "../inputs/PokemonItemsUpdateManyMutationInput";

@TypeGraphQL.InputType("PokemonItemsUpdateManyWithWhereWithoutPokemonInput", {})
export class PokemonItemsUpdateManyWithWhereWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonItemsScalarWhereInput, {
    nullable: false
  })
  where!: PokemonItemsScalarWhereInput;

  @TypeGraphQL.Field(_type => PokemonItemsUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonItemsUpdateManyMutationInput;
}
