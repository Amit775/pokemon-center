import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMovesScalarWhereInput } from "../inputs/PokemonMovesScalarWhereInput";
import { PokemonMovesUpdateManyMutationInput } from "../inputs/PokemonMovesUpdateManyMutationInput";

@TypeGraphQL.InputType("PokemonMovesUpdateManyWithWhereWithoutMoveMethodInput", {})
export class PokemonMovesUpdateManyWithWhereWithoutMoveMethodInput {
  @TypeGraphQL.Field(_type => PokemonMovesScalarWhereInput, {
    nullable: false
  })
  where!: PokemonMovesScalarWhereInput;

  @TypeGraphQL.Field(_type => PokemonMovesUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonMovesUpdateManyMutationInput;
}
