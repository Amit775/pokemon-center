import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("PokemonFormGenerationScalarWhereWithAggregatesInput", {})
export class PokemonFormGenerationScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PokemonFormGenerationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PokemonFormGenerationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PokemonFormGenerationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PokemonFormGenerationScalarWhereWithAggregatesInput[] | undefined;

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
