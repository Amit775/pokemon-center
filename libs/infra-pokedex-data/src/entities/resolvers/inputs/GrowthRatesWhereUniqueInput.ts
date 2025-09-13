import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExperienceListRelationFilter } from "../inputs/ExperienceListRelationFilter";
import { GrowthRatesWhereInput } from "../inputs/GrowthRatesWhereInput";
import { PokemonSpeciesListRelationFilter } from "../inputs/PokemonSpeciesListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("GrowthRatesWhereUniqueInput", {})
export class GrowthRatesWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [GrowthRatesWhereInput], {
    nullable: true
  })
  AND?: GrowthRatesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GrowthRatesWhereInput], {
    nullable: true
  })
  OR?: GrowthRatesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GrowthRatesWhereInput], {
    nullable: true
  })
  NOT?: GrowthRatesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  formula?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesListRelationFilter, {
    nullable: true
  })
  species?: PokemonSpeciesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ExperienceListRelationFilter, {
    nullable: true
  })
  experience?: ExperienceListRelationFilter | undefined;
}
