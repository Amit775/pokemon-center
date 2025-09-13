import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonShapesWhereInput } from "../inputs/PokemonShapesWhereInput";
import { PokemonSpeciesListRelationFilter } from "../inputs/PokemonSpeciesListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PokemonShapesWhereUniqueInput", {})
export class PokemonShapesWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesListRelationFilter, {
    nullable: true
  })
  species?: PokemonSpeciesListRelationFilter | undefined;
}
