import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { PokemonRelationFilter } from "../inputs/PokemonRelationFilter";
import { PokemonStatsPokemon_idStat_idCompoundUniqueInput } from "../inputs/PokemonStatsPokemon_idStat_idCompoundUniqueInput";
import { PokemonStatsWhereInput } from "../inputs/PokemonStatsWhereInput";
import { StatsRelationFilter } from "../inputs/StatsRelationFilter";

@TypeGraphQL.InputType("PokemonStatsWhereUniqueInput", {})
export class PokemonStatsWhereUniqueInput {
  @TypeGraphQL.Field(_type => PokemonStatsPokemon_idStat_idCompoundUniqueInput, {
    nullable: true
  })
  pokemon_id_stat_id?: PokemonStatsPokemon_idStat_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatsWhereInput], {
    nullable: true
  })
  AND?: PokemonStatsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatsWhereInput], {
    nullable: true
  })
  OR?: PokemonStatsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatsWhereInput], {
    nullable: true
  })
  NOT?: PokemonStatsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pokemon_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  stat_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  base_stat?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  effort?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonRelationFilter, {
    nullable: true
  })
  pokemon?: PokemonRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StatsRelationFilter, {
    nullable: true
  })
  stat?: StatsRelationFilter | undefined;
}
