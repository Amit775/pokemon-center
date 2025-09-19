import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { PokemonRelationFilter } from "../inputs/PokemonRelationFilter";
import { VersionRelationFilter } from "../inputs/VersionRelationFilter";

@TypeGraphQL.InputType("PokemonGameIndexWhereInput", {})
export class PokemonGameIndexWhereInput {
  @TypeGraphQL.Field(_type => [PokemonGameIndexWhereInput], {
    nullable: true
  })
  AND?: PokemonGameIndexWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndexWhereInput], {
    nullable: true
  })
  OR?: PokemonGameIndexWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndexWhereInput], {
    nullable: true
  })
  NOT?: PokemonGameIndexWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pokemon_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  version_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  game_index?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonRelationFilter, {
    nullable: true
  })
  pokemon?: PokemonRelationFilter | undefined;

  @TypeGraphQL.Field(_type => VersionRelationFilter, {
    nullable: true
  })
  version?: VersionRelationFilter | undefined;
}
