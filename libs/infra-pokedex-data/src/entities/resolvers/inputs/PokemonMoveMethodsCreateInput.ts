import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMovesCreateNestedManyWithoutMoveMethodInput } from "../inputs/PokemonMovesCreateNestedManyWithoutMoveMethodInput";
import { VersionGroupPokemonMoveMethodsCreateNestedManyWithoutMoveMethodInput } from "../inputs/VersionGroupPokemonMoveMethodsCreateNestedManyWithoutMoveMethodInput";

@TypeGraphQL.InputType("PokemonMoveMethodsCreateInput", {})
export class PokemonMoveMethodsCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => PokemonMovesCreateNestedManyWithoutMoveMethodInput, {
    nullable: true
  })
  pokemonMoves?: PokemonMovesCreateNestedManyWithoutMoveMethodInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsCreateNestedManyWithoutMoveMethodInput, {
    nullable: true
  })
  versionGroups?: VersionGroupPokemonMoveMethodsCreateNestedManyWithoutMoveMethodInput | undefined;
}
