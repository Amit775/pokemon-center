import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonColorsWhereInput } from "../inputs/PokemonColorsWhereInput";
import { PokemonSpeciesListRelationFilter } from "../inputs/PokemonSpeciesListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PokemonColorsWhereUniqueInput", {})
export class PokemonColorsWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [PokemonColorsWhereInput], {
    nullable: true
  })
  AND?: PokemonColorsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonColorsWhereInput], {
    nullable: true
  })
  OR?: PokemonColorsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonColorsWhereInput], {
    nullable: true
  })
  NOT?: PokemonColorsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesListRelationFilter, {
    nullable: true
  })
  species?: PokemonSpeciesListRelationFilter | undefined;
}
