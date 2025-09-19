import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("PokemonTypeScalarWhereWithAggregatesInput", {})
export class PokemonTypeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PokemonTypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PokemonTypeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PokemonTypeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PokemonTypeScalarWhereWithAggregatesInput[] | undefined;

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
