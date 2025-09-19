import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("PokemonStatScalarWhereWithAggregatesInput", {})
export class PokemonStatScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PokemonStatScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PokemonStatScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PokemonStatScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PokemonStatScalarWhereWithAggregatesInput[] | undefined;

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
