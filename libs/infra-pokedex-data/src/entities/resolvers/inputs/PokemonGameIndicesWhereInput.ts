import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { PokemonRelationFilter } from "../inputs/PokemonRelationFilter";
import { VersionsRelationFilter } from "../inputs/VersionsRelationFilter";

@TypeGraphQL.InputType("PokemonGameIndicesWhereInput", {})
export class PokemonGameIndicesWhereInput {
  @TypeGraphQL.Field(_type => [PokemonGameIndicesWhereInput], {
    nullable: true
  })
  AND?: PokemonGameIndicesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndicesWhereInput], {
    nullable: true
  })
  OR?: PokemonGameIndicesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndicesWhereInput], {
    nullable: true
  })
  NOT?: PokemonGameIndicesWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => VersionsRelationFilter, {
    nullable: true
  })
  version?: VersionsRelationFilter | undefined;
}
