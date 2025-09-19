import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { PokemonSpeciesListRelationFilter } from "../inputs/PokemonSpeciesListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PokemonShapeWhereInput", {})
export class PokemonShapeWhereInput {
  @TypeGraphQL.Field(_type => [PokemonShapeWhereInput], {
    nullable: true
  })
  AND?: PokemonShapeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonShapeWhereInput], {
    nullable: true
  })
  OR?: PokemonShapeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonShapeWhereInput], {
    nullable: true
  })
  NOT?: PokemonShapeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesListRelationFilter, {
    nullable: true
  })
  species?: PokemonSpeciesListRelationFilter | undefined;
}
