import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("PokemonStatsScalarWhereWithAggregatesInput", {})
export class PokemonStatsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PokemonStatsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PokemonStatsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PokemonStatsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PokemonStatsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  pokemon_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  stat_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  base_stat?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  effort?: IntWithAggregatesFilter | undefined;
}
