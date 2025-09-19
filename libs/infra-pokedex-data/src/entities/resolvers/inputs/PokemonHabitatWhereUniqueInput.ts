import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonHabitatWhereInput } from "../inputs/PokemonHabitatWhereInput";
import { PokemonSpeciesListRelationFilter } from "../inputs/PokemonSpeciesListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PokemonHabitatWhereUniqueInput", {})
export class PokemonHabitatWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [PokemonHabitatWhereInput], {
    nullable: true
  })
  AND?: PokemonHabitatWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonHabitatWhereInput], {
    nullable: true
  })
  OR?: PokemonHabitatWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonHabitatWhereInput], {
    nullable: true
  })
  NOT?: PokemonHabitatWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesListRelationFilter, {
    nullable: true
  })
  species?: PokemonSpeciesListRelationFilter | undefined;
}
