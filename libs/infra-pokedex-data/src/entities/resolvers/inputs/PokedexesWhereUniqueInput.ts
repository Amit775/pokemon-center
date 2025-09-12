import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { PokedexVersionGroupsListRelationFilter } from "../inputs/PokedexVersionGroupsListRelationFilter";
import { PokedexesWhereInput } from "../inputs/PokedexesWhereInput";
import { PokemonDexNumbersListRelationFilter } from "../inputs/PokemonDexNumbersListRelationFilter";
import { RegionsNullableRelationFilter } from "../inputs/RegionsNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PokedexesWhereUniqueInput", {})
export class PokedexesWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [PokedexesWhereInput], {
    nullable: true
  })
  AND?: PokedexesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexesWhereInput], {
    nullable: true
  })
  OR?: PokedexesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexesWhereInput], {
    nullable: true
  })
  NOT?: PokedexesWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => PokemonDexNumbersListRelationFilter, {
    nullable: true
  })
  dexNumbers?: PokemonDexNumbersListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsListRelationFilter, {
    nullable: true
  })
  versionGroups?: PokedexVersionGroupsListRelationFilter | undefined;
}
