import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonStatsOrderByWithAggregationInput } from "../../../inputs/PokemonStatsOrderByWithAggregationInput";
import { PokemonStatsScalarWhereWithAggregatesInput } from "../../../inputs/PokemonStatsScalarWhereWithAggregatesInput";
import { PokemonStatsWhereInput } from "../../../inputs/PokemonStatsWhereInput";
import { PokemonStatsScalarFieldEnum } from "../../../../enums/PokemonStatsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokemonStatsArgs {
  @TypeGraphQL.Field(_type => PokemonStatsWhereInput, {
    nullable: true
  })
  where?: PokemonStatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokemonStatsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"pokemon_id" | "stat_id" | "base_stat" | "effort">;

  @TypeGraphQL.Field(_type => PokemonStatsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokemonStatsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
