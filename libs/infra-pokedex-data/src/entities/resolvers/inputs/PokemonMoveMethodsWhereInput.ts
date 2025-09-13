import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { PokemonMovesListRelationFilter } from "../inputs/PokemonMovesListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { VersionGroupPokemonMoveMethodsListRelationFilter } from "../inputs/VersionGroupPokemonMoveMethodsListRelationFilter";

@TypeGraphQL.InputType("PokemonMoveMethodsWhereInput", {})
export class PokemonMoveMethodsWhereInput {
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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

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
