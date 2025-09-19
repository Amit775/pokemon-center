import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonShapeWhereInput } from "../inputs/PokemonShapeWhereInput";
import { PokemonSpeciesListRelationFilter } from "../inputs/PokemonSpeciesListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PokemonShapeWhereUniqueInput", {})
export class PokemonShapeWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesListRelationFilter, {
    nullable: true
  })
  species?: PokemonSpeciesListRelationFilter | undefined;
}
