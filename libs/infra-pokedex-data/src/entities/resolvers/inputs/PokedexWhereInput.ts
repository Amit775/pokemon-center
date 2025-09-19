import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { PokedexVersionGroupListRelationFilter } from "../inputs/PokedexVersionGroupListRelationFilter";
import { PokemonDexNumberListRelationFilter } from "../inputs/PokemonDexNumberListRelationFilter";
import { RegionsNullableRelationFilter } from "../inputs/RegionsNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PokedexWhereInput", {})
export class PokedexWhereInput {
  @TypeGraphQL.Field(_type => [PokedexWhereInput], {
    nullable: true
  })
  AND?: PokedexWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexWhereInput], {
    nullable: true
  })
  OR?: PokedexWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexWhereInput], {
    nullable: true
  })
  NOT?: PokedexWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  is_main_series?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => RegionsNullableRelationFilter, {
    nullable: true
  })
  region?: RegionsNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonDexNumberListRelationFilter, {
    nullable: true
  })
  dexNumbers?: PokemonDexNumberListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupListRelationFilter, {
    nullable: true
  })
  versionGroups?: PokedexVersionGroupListRelationFilter | undefined;
}
