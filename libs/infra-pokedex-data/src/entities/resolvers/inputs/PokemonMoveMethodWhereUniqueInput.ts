import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveListRelationFilter } from "../inputs/PokemonMoveListRelationFilter";
import { PokemonMoveMethodWhereInput } from "../inputs/PokemonMoveMethodWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { VersionGroupPokemonMoveMethodListRelationFilter } from "../inputs/VersionGroupPokemonMoveMethodListRelationFilter";

@TypeGraphQL.InputType("PokemonMoveMethodWhereUniqueInput", {})
export class PokemonMoveMethodWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

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
