import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupPokemonMoveMethodsCreateNestedManyWithoutMoveMethodInput } from "../inputs/VersionGroupPokemonMoveMethodsCreateNestedManyWithoutMoveMethodInput";

@TypeGraphQL.InputType("PokemonMoveMethodsCreateWithoutPokemonMovesInput", {})
export class PokemonMoveMethodsCreateWithoutPokemonMovesInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsCreateNestedManyWithoutMoveMethodInput, {
    nullable: true
  })
  versionGroups?: VersionGroupPokemonMoveMethodsCreateNestedManyWithoutMoveMethodInput | undefined;
}
