import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonColorWhereInput } from "../inputs/PokemonColorWhereInput";
import { PokemonSpeciesListRelationFilter } from "../inputs/PokemonSpeciesListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PokemonColorWhereUniqueInput", {})
export class PokemonColorWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [PokemonColorWhereInput], {
    nullable: true
  })
  AND?: PokemonColorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonColorWhereInput], {
    nullable: true
  })
  OR?: PokemonColorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonColorWhereInput], {
    nullable: true
  })
  NOT?: PokemonColorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesListRelationFilter, {
    nullable: true
  })
  species?: PokemonSpeciesListRelationFilter | undefined;
}
