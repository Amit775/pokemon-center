import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { LocationAreaListRelationFilter } from "../inputs/LocationAreaListRelationFilter";
import { LocationGameIndexListRelationFilter } from "../inputs/LocationGameIndexListRelationFilter";
import { PokemonEvolutionListRelationFilter } from "../inputs/PokemonEvolutionListRelationFilter";
import { RegionsNullableRelationFilter } from "../inputs/RegionsNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("LocationWhereInput", {})
export class LocationWhereInput {
  @TypeGraphQL.Field(_type => [LocationWhereInput], {
    nullable: true
  })
  AND?: LocationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationWhereInput], {
    nullable: true
  })
  OR?: LocationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationWhereInput], {
    nullable: true
  })
  NOT?: LocationWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => LocationAreaListRelationFilter, {
    nullable: true
  })
  areas?: LocationAreaListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndexListRelationFilter, {
    nullable: true
  })
  gameIndices?: LocationGameIndexListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionListRelationFilter, {
    nullable: true
  })
  evolution?: PokemonEvolutionListRelationFilter | undefined;
}
