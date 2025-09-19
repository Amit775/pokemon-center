import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("PokemonGameIndexScalarWhereWithAggregatesInput", {})
export class PokemonGameIndexScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PokemonGameIndexScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PokemonGameIndexScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndexScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PokemonGameIndexScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndexScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PokemonGameIndexScalarWhereWithAggregatesInput[] | undefined;

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
