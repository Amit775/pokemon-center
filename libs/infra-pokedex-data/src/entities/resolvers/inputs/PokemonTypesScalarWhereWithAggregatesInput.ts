import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("PokemonTypesScalarWhereWithAggregatesInput", {})
export class PokemonTypesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PokemonTypesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PokemonTypesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PokemonTypesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PokemonTypesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  pokemon_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  type_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  slot?: IntWithAggregatesFilter | undefined;
}
