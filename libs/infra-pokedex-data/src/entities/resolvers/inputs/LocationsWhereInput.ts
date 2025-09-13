import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { LocationAreasListRelationFilter } from "../inputs/LocationAreasListRelationFilter";
import { LocationGameIndicesListRelationFilter } from "../inputs/LocationGameIndicesListRelationFilter";
import { PokemonEvolutionListRelationFilter } from "../inputs/PokemonEvolutionListRelationFilter";
import { RegionsNullableRelationFilter } from "../inputs/RegionsNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("LocationsWhereInput", {})
export class LocationsWhereInput {
  @TypeGraphQL.Field(_type => [LocationsWhereInput], {
    nullable: true
  })
  AND?: LocationsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationsWhereInput], {
    nullable: true
  })
  OR?: LocationsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationsWhereInput], {
    nullable: true
  })
  NOT?: LocationsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  region_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => RegionsNullableRelationFilter, {
    nullable: true
  })
  region?: RegionsNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LocationAreasListRelationFilter, {
    nullable: true
  })
  areas?: LocationAreasListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndicesListRelationFilter, {
    nullable: true
  })
  gameIndices?: LocationGameIndicesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionListRelationFilter, {
    nullable: true
  })
  evolution?: PokemonEvolutionListRelationFilter | undefined;
}
