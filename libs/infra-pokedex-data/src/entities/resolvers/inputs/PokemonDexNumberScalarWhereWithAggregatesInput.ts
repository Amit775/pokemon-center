import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("PokemonDexNumberScalarWhereWithAggregatesInput", {})
export class PokemonDexNumberScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PokemonDexNumberScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PokemonDexNumberScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumberScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PokemonDexNumberScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumberScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PokemonDexNumberScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  species_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  pokedex_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  pokedex_number?: IntWithAggregatesFilter | undefined;
}
