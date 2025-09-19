import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { PokemonMoveListRelationFilter } from "../inputs/PokemonMoveListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { VersionGroupPokemonMoveMethodListRelationFilter } from "../inputs/VersionGroupPokemonMoveMethodListRelationFilter";

@TypeGraphQL.InputType("PokemonMoveMethodWhereInput", {})
export class PokemonMoveMethodWhereInput {
  @TypeGraphQL.Field(_type => [PokemonMoveMethodWhereInput], {
    nullable: true
  })
  AND?: PokemonMoveMethodWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveMethodWhereInput], {
    nullable: true
  })
  OR?: PokemonMoveMethodWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveMethodWhereInput], {
    nullable: true
  })
  NOT?: PokemonMoveMethodWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveListRelationFilter, {
    nullable: true
  })
  pokemonMoves?: PokemonMoveListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodListRelationFilter, {
    nullable: true
  })
  versionGroups?: VersionGroupPokemonMoveMethodListRelationFilter | undefined;
}
