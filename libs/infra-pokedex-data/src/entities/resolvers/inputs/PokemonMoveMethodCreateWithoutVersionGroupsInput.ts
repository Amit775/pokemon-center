import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveCreateNestedManyWithoutMoveMethodInput } from "../inputs/PokemonMoveCreateNestedManyWithoutMoveMethodInput";

@TypeGraphQL.InputType("PokemonMoveMethodCreateWithoutVersionGroupsInput", {})
export class PokemonMoveMethodCreateWithoutVersionGroupsInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => PokemonMoveCreateNestedManyWithoutMoveMethodInput, {
    nullable: true
  })
  pokemonMoves?: PokemonMoveCreateNestedManyWithoutMoveMethodInput | undefined;
}
