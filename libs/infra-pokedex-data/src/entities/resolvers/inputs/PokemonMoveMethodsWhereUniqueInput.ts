import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveMethodsWhereInput } from "../inputs/PokemonMoveMethodsWhereInput";
import { PokemonMovesListRelationFilter } from "../inputs/PokemonMovesListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { VersionGroupPokemonMoveMethodsListRelationFilter } from "../inputs/VersionGroupPokemonMoveMethodsListRelationFilter";

@TypeGraphQL.InputType("PokemonMoveMethodsWhereUniqueInput", {})
export class PokemonMoveMethodsWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveMethodsWhereInput], {
    nullable: true
  })
  AND?: PokemonMoveMethodsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveMethodsWhereInput], {
    nullable: true
  })
  OR?: PokemonMoveMethodsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveMethodsWhereInput], {
    nullable: true
  })
  NOT?: PokemonMoveMethodsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonMovesListRelationFilter, {
    nullable: true
  })
  pokemonMoves?: PokemonMovesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsListRelationFilter, {
    nullable: true
  })
  versionGroups?: VersionGroupPokemonMoveMethodsListRelationFilter | undefined;
}
