import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("PokemonFormGenerationsScalarWhereWithAggregatesInput", {})
export class PokemonFormGenerationsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PokemonFormGenerationsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PokemonFormGenerationsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PokemonFormGenerationsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PokemonFormGenerationsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  pokemon_form_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  generation_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  game_index?: IntWithAggregatesFilter | undefined;
}
