import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { PokemonSpeciesListRelationFilter } from "../inputs/PokemonSpeciesListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PokemonShapesWhereInput", {})
export class PokemonShapesWhereInput {
  @TypeGraphQL.Field(_type => [PokemonShapesWhereInput], {
    nullable: true
  })
  AND?: PokemonShapesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonShapesWhereInput], {
    nullable: true
  })
  OR?: PokemonShapesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonShapesWhereInput], {
    nullable: true
  })
  NOT?: PokemonShapesWhereInput[] | undefined;

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
