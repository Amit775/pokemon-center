import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("PokemonDexNumbersScalarWhereWithAggregatesInput", {})
export class PokemonDexNumbersScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PokemonDexNumbersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PokemonDexNumbersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumbersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PokemonDexNumbersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumbersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PokemonDexNumbersScalarWhereWithAggregatesInput[] | undefined;

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
