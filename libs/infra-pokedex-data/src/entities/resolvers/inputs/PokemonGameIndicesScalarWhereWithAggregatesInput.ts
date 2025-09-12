import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("PokemonGameIndicesScalarWhereWithAggregatesInput", {})
export class PokemonGameIndicesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PokemonGameIndicesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PokemonGameIndicesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndicesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PokemonGameIndicesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndicesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PokemonGameIndicesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  pokemon_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  version_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  game_index?: IntWithAggregatesFilter | undefined;
}
