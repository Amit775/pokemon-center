import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { LocationAreasListRelationFilter } from "../inputs/LocationAreasListRelationFilter";
import { LocationGameIndicesListRelationFilter } from "../inputs/LocationGameIndicesListRelationFilter";
import { LocationsWhereInput } from "../inputs/LocationsWhereInput";
import { PokemonEvolutionListRelationFilter } from "../inputs/PokemonEvolutionListRelationFilter";
import { RegionsNullableRelationFilter } from "../inputs/RegionsNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("LocationsWhereUniqueInput", {})
export class LocationsWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

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
